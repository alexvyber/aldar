type EnumValue = string | number

type Prettify<T> = { -readonly [K in keyof T]: T[K] } & {}

export function Enum<const T extends Record<string, EnumValue>>(
  obj: T,
): Prettify<
  T & {
    $: {
      keys(): Array<keyof T>
      values(): Array<T[keyof T]>
      entries(): Array<{ [Key in keyof T]: [Key, T[Key]] }[keyof T]>
      mirror(): { [Key in keyof T as T[Key]]: Key }

      KeysType: keyof T
      ValuesType: T[keyof T]
      EntriesType: Array<{ [Key in keyof T]: [Key, T[Key]] }[keyof T]>
    }
  }
> {
  const obj_ = { ...obj }
  const obj__ = {}

  Object.assign(obj__, {
    $: {
      values: () => values(obj_),
      mirror: () => mirror(obj_),
      keys: () => keys(obj_),
      entries: () => entries(obj_),
    },
    ...obj_,
  })

  return Object.freeze(obj__) as any
}

export function mirror<const T extends Record<string, EnumValue>>(
  obj: T,
): { [Key in keyof T as T[Key]]: Key } {
  return Object.freeze(
    Object.fromEntries(Object.entries(obj).map(([left, right]) => [right, left])),
  ) as any
}

export function values<const T extends Record<string, EnumValue> = {}>(obj: T): Array<T[keyof T]> {
  return Object.values(obj) as any
}

export function keys<const T extends Record<string, EnumValue>>(obj: T): Array<keyof T> {
  return Object.keys(obj) as any
}

export function entries<const T extends Record<string, EnumValue> = {}>(
  obj: T,
): Array<{ [Key in keyof T]: [Key, T[Key]] }[keyof T]> {
  return Object.entries(obj) as any
}
