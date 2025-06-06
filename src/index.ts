type EnumValue = string | number

type Prettify<T> = { -readonly [K in keyof T]: T[K] } & {}

export function Enum<const T extends readonly EnumValue[]>(
  obj: T
): { [Key in T[number]]: Key } & {
  $: Aldar<{ [Key in T[number]]: Key }>
}
export function Enum<const T extends Record<string, EnumValue>>(
  obj: T
): Prettify<
  T & {
    $: Aldar<T>
  }
>
export function Enum(obj: EnumValue[] | Record<EnumValue, EnumValue>): any {
  let obj_: Record<EnumValue, EnumValue> = null

  if (Array.isArray(obj)) {
    obj_ = Object.fromEntries(obj.map((entry) => [entry, entry]))
  } else {
    obj_ = { ...obj }
  }

  const obj__ = {}

  Object.assign(obj__, {
    $: {
      values: () => values(obj_),
      mirror: () => mirror(obj_),
      keys: () => keys(obj_),
      entries: () => entries(obj_),
      extend: (obj: any) => extend(obj_, obj)
    },
    ...obj_
  })

  return Object.freeze(obj__) as any
}

export function mirror<const T extends Record<string, EnumValue>>(obj: T): { [Key in keyof T as T[Key]]: Key } {
  return Object.freeze(Object.fromEntries(Object.entries(obj).map(([left, right]) => [right, left]))) as any
}

export function values<const T extends Record<string, EnumValue> = {}>(obj: T): Array<T[keyof T]> {
  return Object.values(obj) as any
}

export function keys<const T extends Record<string, EnumValue>>(obj: T): Array<keyof T> {
  return Object.keys(obj) as any
}

export function entries<const T extends Record<string, EnumValue> = {}>(
  obj: T
): Array<{ [Key in keyof T]: [Key, T[Key]] }[keyof T]> {
  return Object.entries(obj) as any
}

export function extend<const T extends readonly EnumValue[], U extends object>(
  aldar: U,
  obj: T
): Prettify<
  Omit<U, "$"> & { [Key in T[number]]: Key } & {
    $: Aldar<{ [Key in T[number]]: Key } & Omit<U, "$">>
  }
>
export function extend<const T extends Record<string, EnumValue>, U extends object>(
  aldar: U,
  obj: T
): Prettify<
  Omit<U, "$"> &
    T & {
      $: Aldar<T & Omit<U, "$">>
    }
>
export function extend(aldar: any, obj: any) {
  let obj_: Record<EnumValue, EnumValue> = null

  if (Array.isArray(obj)) {
    obj_ = Object.fromEntries(obj.map((entry) => [entry, entry]))
  } else {
    obj_ = { ...obj }
  }

  const enumsValues = Object.fromEntries(Object.entries(aldar).filter(([key]) => key !== "$"))

  return Enum(Object.assign(obj_, enumsValues)) as any
}

type Aldar<T extends Record<string, EnumValue>> = Prettify<{
  keys(): Array<keyof T>
  values(): Array<T[keyof T]>
  entries(): Array<{ [Key in keyof T]: [Key, T[Key]] }[keyof T]>
  mirror(): { [Key in keyof T as T[Key]]: Key }

  extend<const U extends readonly EnumValue[]>(
    arg: U
  ): Prettify<T & { [Key in U[number]]: Key } & { $: Aldar<T & { [Key in U[number]]: Key }> }>
  extend<const U extends Record<string, EnumValue>>(arg: U): Prettify<T & U & { $: Aldar<T & U> }>

  KeysType: keyof T
  ValuesType: T[keyof T]
  EntriesType: Array<{ [Key in keyof T]: [Key, T[Key]] }[keyof T]>
}>
