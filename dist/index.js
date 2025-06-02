export function Enum(obj) {
    const obj_ = { ...obj };
    const obj__ = {};
    Object.assign(obj__, {
        $: {
            values: () => values(obj_),
            mirror: () => mirror(obj_),
            keys: () => keys(obj_),
            entries: () => entries(obj_),
        },
        ...obj_,
    });
    return Object.freeze(obj__);
}
function mirror(obj) {
    return Object.freeze(Object.fromEntries(Object.entries(obj).map(([left, right]) => [right, left])));
}
function values(obj) {
    return Object.values(obj);
}
function keys(obj) {
    return Object.keys(obj);
}
function entries(obj) {
    return Object.entries(obj);
}
//# sourceMappingURL=index.js.map