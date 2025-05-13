// str1 과 str2 를 나눌수 있는 최대 길이의 문자열 반환 없으면 ""

const str1 = "ABCABC", str2 = "ABC"
// Output: "AB"

// 1. include 무작위 대입
// 크기가 더 작은쪽을 조사해서 확인해보면 됨
// 최대 공약수의 [0] 은 str1, str2 랑 같아야 성립을 해
// 길이 % 최대 공약수가 === 0 이 나와야해
// 31분
var gcdOfStrings = function (str1, str2) {
    let result = ""
    let str = ""
    // 긴 쪽 확인해야해

    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
        if (str1[i] !== str2[i]) break

        str += str1[i]
        const isRemainder = (str1.length % (str.length || 1)) === 0 && (str2.length % (str.length || 1)) === 0

        if (isRemainder) result = str
    }

    for (let i = result.length; i < Math.max(str1.length, str2.length); i++) {
        const word1 = str1[i] ?? result[i % result.length]
        const word2 = str2[i] ?? result[i % result.length]
        if (word1 !== result[i % result.length] || word2 !== result[i % result.length]) return ""
    }

    return result
};

console.log(gcdOfStrings(str1, str2))