type EnumValue = string | number

type Keys<T extends Record<string, EnumValue>> = keyof T

type Values<T extends Record<string, EnumValue>> = T[keyof T]

type Entries<T extends Record<string, EnumValue>> = Array<
  { [Key in keyof T]: [Key, Values<Pick<T, Key>>] }[keyof T]
>

export function Enum<const T extends Record<string, EnumValue>>(
  obj: T,
): T & {
  $: {
    keys(): Array<keyof T>

    values(): Array<T[keyof T]>

    entries(): Array<{ [Key in keyof T]: [Key, Values<Pick<T, Key>>] }[keyof T]>

    mirror(): { [Key in keyof T as T[Key]]: Key }

    // getKey<V extends Values<T>>(
    //   value: V,
    // ): {
    //   [Key in keyof T as T[Key] extends V ? Key : never]: Key
    // } extends Record<string, infer R>
    //   ? R
    //   : undefined

    KeysType: Keys<T>
    ValuesType: Values<T>
    EntriesType: Entries<T>
  }
} {
  const obj_ = { ...obj }
  const obj__ = {}

  Object.assign(obj__, {
    $: {
      values: () => values(obj_),
      mirror: () => mirror(obj_),
      keys: () => keys(obj_),
      entries: () => entries(obj_),
      // getKey: (key: Values<T>) => getKey(obj_, key),
    },
  })

  return Object.freeze({ ...obj_, ...obj__ }) as any
}

function mirror<const T extends Record<string, EnumValue>>(
  obj: T,
): { readonly [Key in keyof T as T[Key]]: Key } {
  return Object.freeze(
    Object.fromEntries(Object.entries(obj).map(([left, right]) => [right, left])),
  ) as any
}

// function getKey<E extends Record<string, EnumValue>, V extends Values<E>>(
//   aldar: E,
//   value: V,
// ): { [Key in keyof E as E[Key] extends V ? Key : never]: Key } extends Record<string, infer R>
//   ? R
//   : undefined {
//   const maybeEntry = Object.entries(aldar).find(([_key, val]) => val === value)

//   return maybeEntry?.[0] as any
// }

function values<const T extends Record<string, EnumValue> = {}>(obj: T): Array<Values<T>> {
  return Object.values(obj) as any
}
function keys<const T extends Record<string, EnumValue>>(obj: T): Array<keyof T> {
  return Object.keys(obj) as any
}
function entries<const T extends Record<string, EnumValue> = {}>(obj: T): Array<Values<T>> {
  return Object.entries(obj) as any
}
