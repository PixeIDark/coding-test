// n < 3 일 경우 조기
// 5분
var tribonacci = function (n) {
    const dp = Array(n + 1).fill(1)
    dp[0] = 0

    for (let i = 3; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
    }

    return dp[n]
};