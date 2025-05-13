// 문자 병합하기 1먼저 해서 순서대로

const word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
//     word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s

// 3분
var mergeAlternately = function (word1, word2) {
    let str = ""

    for (let i = 0; i < Math.max(word1.length, word2.length); i++) str += (word1[i] ?? "") + (word2[i] ?? "")

    return str
};

console.log(mergeAlternately(word1, word2))
