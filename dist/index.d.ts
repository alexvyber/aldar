type EnumValue = string | number
type Keys<T extends Record<string, EnumValue>> = keyof T
type Values<T extends Record<string, EnumValue>> = T[keyof T]
type Entries<T extends Record<string, EnumValue>> = Array<
  {
    [Key in keyof T]: [Key, Values<Pick<T, Key>>]
  }[keyof T]
>
type Prettify<T> = {
  -readonly [K in keyof T]: T[K]
} & {}
export declare function Enum<const T extends Record<string, EnumValue>>(
  obj: T,
): Prettify<
  T & {
    $: {
      keys(): Array<keyof T>
      values(): Array<T[keyof T]>
      entries(): Array<
        {
          [Key in keyof T]: [Key, Values<Pick<T, Key>>]
        }[keyof T]
      >
      mirror(): {
        [Key in keyof T as T[Key]]: Key
      }
      KeysType: Keys<T>
      ValuesType: Values<T>
      EntriesType: Entries<T>
    }
  }
>
