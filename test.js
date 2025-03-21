const arr = []

for (let i = 0; i < 10000; i++) {
    arr.push(i.toString())
}

console.time("objEntries")
const objEntries = Object.fromEntries(arr.map((num, idx) => [num, idx]))
console.timeEnd("objEntries")

console.time("reduce")
const reducedObj = arr.reduce((obj, num, idx) => {
    obj[num] = idx
    return obj
}, {})
console.timeEnd("reduce")

console.time("forEach")
const forEachObj = {}
arr.forEach((num, idx) => forEachObj[num] = idx)
console.timeEnd("forEach")

console.time("for")
const forObj = {}
for (let i = 0; i < arr.length; i++) {
    forObj[arr[i]] = i
}
console.timeEnd("for")

console.time("forOf")
const forOfObj = {}
let i = 0
for (const num of arr) {
    forOfObj[num] = i
    i++
}
console.timeEnd("forOf")

// 오브젝트 엔트리는 폐급이고, forEach, for 가 젤 빠름