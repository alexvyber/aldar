type EnumValue = string | number;
type Prettify<T> = {
    -readonly [K in keyof T]: T[K];
} & {};
export declare function Enum<const T extends readonly EnumValue[]>(obj: T): {
    [Key in T[number]]: Key;
} & {
    $: Aldar<{
        [Key in T[number]]: Key;
    }>;
};
export declare function Enum<const T extends Record<string, EnumValue>>(obj: T): Prettify<T & {
    $: Aldar<T>;
}>;
export declare function mirror<const T extends Record<string, EnumValue>>(obj: T): {
    [Key in keyof T as T[Key]]: Key;
};
export declare function values<const T extends Record<string, EnumValue> = {}>(obj: T): Array<T[keyof T]>;
export declare function keys<const T extends Record<string, EnumValue>>(obj: T): Array<keyof T>;
export declare function entries<const T extends Record<string, EnumValue> = {}>(obj: T): Array<{
    [Key in keyof T]: [Key, T[Key]];
}[keyof T]>;
export declare function extend<const T extends readonly EnumValue[], U extends object>(aldar: U, obj: T): Prettify<Omit<U, "$"> & {
    [Key in T[number]]: Key;
} & {
    $: Aldar<{
        [Key in T[number]]: Key;
    } & Omit<U, "$">>;
}>;
export declare function extend<const T extends Record<string, EnumValue>, U extends object>(aldar: U, obj: T): Prettify<Omit<U, "$"> & T & {
    $: Aldar<T & Omit<U, "$">>;
}>;
type Aldar<T extends Record<string, EnumValue>> = Prettify<{
    keys(): Array<keyof T>;
    values(): Array<T[keyof T]>;
    entries(): Array<{
        [Key in keyof T]: [Key, T[Key]];
    }[keyof T]>;
    mirror(): {
        [Key in keyof T as T[Key]]: Key;
    };
    extend<const U extends readonly EnumValue[]>(arg: U): Prettify<T & {
        [Key in U[number]]: Key;
    } & {
        $: Aldar<T & {
            [Key in U[number]]: Key;
        }>;
    }>;
    extend<const U extends Record<string, EnumValue>>(arg: U): Prettify<T & U & {
        $: Aldar<T & U>;
    }>;
    KeysType: keyof T;
    ValuesType: T[keyof T];
    EntriesType: Array<{
        [Key in keyof T]: [Key, T[Key]];
    }[keyof T]>;
}>;
export {};
