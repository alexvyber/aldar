// declare const brandSymbol: unique symbol;

type _<T extends string | number> = T & { brand: T };
type EnumValue = string | number;

export type Keys<T extends Record<string, _<EnumValue>>> = keyof T;

export type Values<
	T extends Record<string, _<EnumValue> | EnumValue>,
	Branded extends false | undefined = undefined,
> = Branded extends false ? Unwrap<T[keyof T]> : T[keyof T];

export type Unwrap<T> = T extends _<infer R> ? R : never;

export function Enum<
	const T extends Record<string, EnumValue>,
	Branded extends false | undefined = undefined,
>(
	obj: T,
	_branded?: Branded,
): {
	readonly [Key in keyof T as Key]: Branded extends false
		? Unwrap<_<T[Key]>>
		: _<T[Key]>;
} {
	return Object.freeze(obj) as any;
}

export function mirror<const T extends Record<string, _<EnumValue>>>(
	obj: T,
): { readonly [Key in keyof T as Unwrap<T[Key]>]: Key } {
	return Object.freeze(
		Object.fromEntries(
			Object.entries(obj).map(([left, right]) => [right, left]),
		),
	) as any;
}

export function getKey<
	E extends Record<string, _<EnumValue>>,
	V extends Values<E, Branded>,
	Branded extends false | undefined = undefined,
>(
	aldar: E,
	value: V,
	_branded?: Branded,
): { [Key in keyof E as E[Key] extends V ? Key : never]: Key } extends Record<
	string,
	infer R
>
	? R
	: undefined {
	const maybeEntry = Object.entries(aldar).find(([_key, val]) => val === value);

	return maybeEntry?.[0] as any;
}

export function values<
	Branded extends false | undefined = undefined,
	const T extends Record<string, _<EnumValue>> = {},
>(obj: T, _branded?: Branded): Array<Values<T, Branded>> {
	return Object.values(obj) as any;
}
export function keys<const T extends Record<string, _<EnumValue>>>(
	obj: T,
): Array<keyof T> {
	return Object.values(obj) as any;
}
export function entries<
	Branded extends false | undefined = undefined,
	const T extends Record<string, _<EnumValue>> = {},
>(obj: T, _branded?: Branded): Array<Values<T, Branded>> {
	return Object.values(obj) as any;
}

// export function validateValue<const T extends Record<string, EnumValue>, V extends (Values<T> | Values<T, false>) | ({} & string) | ({} & number)>(
// 	aldar: T,
// 	value: V ,
// ): boolean {
// 	return Object.values(aldar).includes(value as any);
// }

// const sym = Symbol("kek");
// const Some = Enum({ 1: 1, one: "123", other: sym });
// const v = values(Some, false);
// const e = entries(Some, false).map((item) => item);
// const vv = values(Some);
// const ee = entries(Some).map((item) => item);
// const k = getKey(Some, "123", false);
// const m = mirror(Some);
// const x = keys(Some);
// function kek(arg: Values<typeof Some, false>) {}

// const isValid = validateValue(Some, "123");
// kek(v[3]);
// kek(Some.other);
// kek(sym);
