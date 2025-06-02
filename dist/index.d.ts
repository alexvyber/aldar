type EnumValue = string | number;
type Prettify<T> = {
    -readonly [K in keyof T]: T[K];
} & {};
export declare function Enum<const T extends Record<string, EnumValue>>(obj: T): Prettify<T & {
    $: {
        keys(): Array<keyof T>;
        values(): Array<T[keyof T]>;
        entries(): Array<{
            [Key in keyof T]: [Key, T[Key]];
        }[keyof T]>;
        mirror(): {
            [Key in keyof T as T[Key]]: Key;
        };
        KeysType: keyof T;
        ValuesType: T[keyof T];
        EntriesType: Array<{
            [Key in keyof T]: [Key, T[Key]];
        }[keyof T]>;
    };
}>;
export {};
