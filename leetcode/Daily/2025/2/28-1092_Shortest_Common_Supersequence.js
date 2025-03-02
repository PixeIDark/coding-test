// str1, str2 의 최단 부모 찾기

const str1 = "abac", str2 = "cab"
// Output: "cabac"
// Explanation:
//     str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
//     str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
//     The answer provided is the shortest such string that satisfies these properties.

// str1 str2 가장 많이 겹치는 구간 찾고 어케 이어붙여라.
//
var shortestCommonSupersequence = function (str1, str2) {
    const n = str1.length > str2.length ? str1.length : str2.length
    const dp = Array.from({length: n}, () => [])

    const arr1 = str1.split("")
    const arr2 = str2.split("")

    let isRight = false
    let prev = -1
    let k = 1

    for (let i = 0; i < arr2.length; i++) {
        const s = arr2[i]
        const idx = arr1.indexOf(s)
        if (idx === -1) {
            continue
        }

        if (prev + k === idx) {
            dp[prev].push(s)
            k++
        } else {
            prev = idx
            dp[i].push(s)
            k = 1
        }
    }

    console.log(dp)
};

console.log(shortestCommonSupersequence(str1, str2))