type EnumValue = string | number
type Prettify<T> = {
  -readonly [K in keyof T]: T[K]
} & {}
export declare function Enum<const T extends readonly EnumValue[]>(
  obj: T,
): {
  [Key in T[number]]: Key
} & {
  $: {
    keys(): T
    values(): T
    entries(): {
      [Key in T[number]]: [Key, Key]
    }[T[number]]
    mirror(): {
      [Key in T[number]]: Key
    }
    KeysType: T
    ValuesType: T
    EntriesType: {
      [Key in T[number]]: [Key, Key]
    }[T[number]]
  }
}
export declare function Enum<const T extends Record<string, EnumValue>>(
  obj: T,
): Prettify<
  T & {
    $: {
      keys(): Array<keyof T>
      values(): Array<T[keyof T]>
      entries(): Array<
        {
          [Key in keyof T]: [Key, T[Key]]
        }[keyof T]
      >
      mirror(): {
        [Key in keyof T as T[Key]]: Key
      }
      KeysType: keyof T
      ValuesType: T[keyof T]
      EntriesType: Array<
        {
          [Key in keyof T]: [Key, T[Key]]
        }[keyof T]
      >
    }
  }
>
export declare function mirror<const T extends Record<string, EnumValue>>(
  obj: T,
): {
  [Key in keyof T as T[Key]]: Key
}
export declare function values<const T extends Record<string, EnumValue> = {}>(
  obj: T,
): Array<T[keyof T]>
export declare function keys<const T extends Record<string, EnumValue>>(obj: T): Array<keyof T>
export declare function entries<const T extends Record<string, EnumValue> = {}>(
  obj: T,
): Array<
  {
    [Key in keyof T]: [Key, T[Key]]
  }[keyof T]
>
export {}
