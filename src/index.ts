type EnumValue = string | number

type Keys<T extends Record<string, EnumValue>> = keyof T

type Values<T extends Record<string, EnumValue>> = T[keyof T]

type Entries<T extends Record<string, EnumValue>> = Array<
  { [Key in keyof T]: [Key, Values<Pick<T, Key>>] }[keyof T]
>

type Prettify<T> = { -readonly [K in keyof T]: T[K] } & {}

export function Enum<const T extends Record<string, EnumValue>>(
  obj: T,
): Prettify<
  T & {
    $: {
      keys(): Array<keyof T>
      values(): Array<T[keyof T]>
      entries(): Array<{ [Key in keyof T]: [Key, Values<Pick<T, Key>>] }[keyof T]>
      mirror(): { [Key in keyof T as T[Key]]: Key }

      KeysType: Keys<T>
      ValuesType: Values<T>
      EntriesType: Entries<T>
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

function mirror<const T extends Record<string, EnumValue>>(
  obj: T,
): { readonly [Key in keyof T as T[Key]]: Key } {
  return Object.freeze(
    Object.fromEntries(Object.entries(obj).map(([left, right]) => [right, left])),
  ) as any
}

function values<const T extends Record<string, EnumValue> = {}>(obj: T): Array<Values<T>> {
  return Object.values(obj) as any
}

function keys<const T extends Record<string, EnumValue>>(obj: T): Array<keyof T> {
  return Object.keys(obj) as any
}

function entries<const T extends Record<string, EnumValue> = {}>(obj: T): Array<Values<T>> {
  return Object.entries(obj) as any
}
