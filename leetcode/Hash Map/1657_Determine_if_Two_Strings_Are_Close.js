// 문자열 종류 자체를 서로 교환 또는 위치만 바꿀시 작업 + 1 word1 과 word2 가 같아질 수 있는지

const word1 = "aaabbbbccddeeeeefffff", word2 = "aaaaabbcccdddeeeeffff"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"

// 조건 1: 서로가 가진 알파벳의 종류가 같아야함
// 조건 2: 개수 분포가 같아야함
// 1. map 에 num => count 저장
// 2. num 와 count 를 각각의 set1, set2 에 넣는다
// 3. set1.difference(set2) 시 아무것도 반환안하면 트루 아니면 펄스
// 19분
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false

    const map1 = new Map()
    const map2 = new Map()

    for (let i = 0; i < word1.length; i++) {
        map1.set(word1[i], (map1.get(word1[i]) ?? 0) + 1)
        map2.set(word2[i], (map2.get(word2[i]) ?? 0) + 1)
    }

    const setNum1 = new Set([...map1.keys()])
    const setNum2 = new Set([...map2.keys()])
    const arr1 = [...map1.values()].sort((a, b) => a - b)
    const arr2 = [...map2.values()].sort((a, b) => a - b)

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (arr1[i] !== arr2[i]) return false
    }

    return setNum1.difference(setNum2).size === 0 && setNum2.difference(setNum1).size === 0
};

console.log(closeStrings(word1, word2))

// const set1 = new Set([1, 2, 3])
// const set2 = new Set([1, 2, 3])
// console.log(set1, set2)
// const a = set1.difference(set2).size
// console.log(a) // 0