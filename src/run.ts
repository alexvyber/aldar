import { Enum } from "./index"

console.time("start")
// const Other = Enum(["Some", "Other", "Come"])
const Other = Enum({ Some: "Some" })

const One = Other.$.extend({ More: "More" })
// console.log("🚀 ~ One:", One)

const Lol = One.$.extend({ XXXX: "XXXX" })
console.log("🚀 ~ Lol:", Lol)

const Pop = Lol.$.extend({ Ror: "ROr" }).$.extend(["123123", "ZZZZZ"])
console.log("🚀 ~ Pop:", Pop)

const kik = Pop.$.extend(["LLLklasdasd"])
console.log("🚀 ~ kik:", kik)

const loll = kik.$.extend({ LLL: "123123" })
const lasdf = loll.$.extend({ qweqweqwe: 123123123123 })
console.log("🚀 ~ lasdf:", lasdf)
const qqq = lasdf.$.values()
console.log("🚀 ~ qqq:", qqq)
const qasd = lasdf.$.entries()
console.log("🚀 ~ qasd:", qasd)

// const Two = extend(One, ["Poppy", "Sexxy"])
// console.log("🚀 ~ Two:", Two)

// const Three = Two.$.extend(["Cunt"])
// console.log("🚀 ~ Three:", Three)
// const Four = Three.$.extend({ Pussy: "Fuck" })
// console.log("🚀 ~ Four:", Four)

// const vv = Two.$.values()
// console.log("🚀 ~ vv:", vv)

// const vvv = Four.$.values()
// console.log("🚀 ~ vvv:", vvv)

// const mmm = Four.$.mirror()

// Other.$.keys()
// Other.$.entries()
// Other.$.mirror()

// const v = Other.$.values()
// console.log("🚀 ~ v:", v)
// const k = Other.$.keys()
// console.log("🚀 ~ k:", k)
// const e = Other.$.entries()
// console.log("🚀 ~ e:", e)
// const m = Other.$.mirror()
// console.log("🚀 ~ m:", m)
// // const g = Other.$.getKey(Other.Qqq)
// // console.log("🚀 ~ g:", g)

// Other.Some
// // Other.$.getKey(1)

// type Keys = typeof Other.$.KeysType
// type Values = typeof Other.$.ValuesType
// type Entries = typeof Other.$.EntriesType

// function args(kek: typeof Other.$.ValuesType) {}

// const Some = Enum({
//   Xxx: "Some",
//   Qqq: "Other",
//   1: "One",
//   One: 1
//   //   1: 11111,
//   //   _____: "QQQQQQQQQQ"
// })

// Some.$.EntriesType

// // Some.$.keys()
// // Some.$.entries()
// // Some.$.mirror()

// // Some

// // const v = Some.$.values()
// // console.log("🚀 ~ v:", v)
// // const k = Some.$.keys()
// // console.log("🚀 ~ k:", k)
// // const e = Some.$.entries()
// // console.log("🚀 ~ e:", e)
// // const m = Some.$.mirror()
// // console.log("🚀 ~ m:", m)
// // // const g = Some.$.getKey(Some.Qqq)
// // // console.log("🚀 ~ g:", g)

// // Some.Xxx
// // // Some.$.getKey(1)

// // type Keys = typeof Some.$.KeysType
// // type Values = typeof Some.$.ValuesType
// // type Entries = typeof Some.$.EntriesType

// // function args(kek: typeof Some.$.ValuesType) {}

// // const obj = { name: "asdfasd" }
// // Object.assign(obj, {
// //   kek: function Some() {
// //     console.log(this)
// //   },
// // })
// // obj.kek()

// console.timeEnd("start")
