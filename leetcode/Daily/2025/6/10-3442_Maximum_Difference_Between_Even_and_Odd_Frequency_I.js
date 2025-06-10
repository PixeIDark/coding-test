// 객체에 저장 후 나중에 세어보기?
// 1. arr에 담기
// 2. 분류
// 15분
var maxDifference = function (s) {
    const dp = Array(26).fill(0)

    for (const char of s) {
        dp[char.charCodeAt(0) - 97]++
    }

    let maxOdd = 0
    let minEven = Infinity

    for (const count of dp) {
        if (count === 0) continue

        if (count % 2 === 1) maxOdd = Math.max(maxOdd, count)
        else minEven = Math.min(minEven, count)
    }

    return maxOdd - minEven
};