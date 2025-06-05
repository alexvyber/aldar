export function Enum(obj) {
  let obj_ = null
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
    },
    ...obj_,
  })
  return Object.freeze(obj__)
}
export function mirror(obj) {
  return Object.freeze(
    Object.fromEntries(Object.entries(obj).map(([left, right]) => [right, left])),
  )
}
export function values(obj) {
  return Object.values(obj)
}
export function keys(obj) {
  return Object.keys(obj)
}
export function entries(obj) {
  return Object.entries(obj)
}
//# sourceMappingURL=index.js.map
