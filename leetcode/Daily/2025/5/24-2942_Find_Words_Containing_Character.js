// x 가 word 에 포함되어있으면 해당 인덱스 반환

const words = ["abc", "bcd", "aaaa", "cbc"], x = "a"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

// 1. word 마다 .include 해보기
// 2.
// 11분
var findWordsContaining = function (words, x) {
    return words.map((word, i) => word.includes(x) ? i : -1).filter(x => x !== -1)
};

console.log(findWordsContaining(words, x))