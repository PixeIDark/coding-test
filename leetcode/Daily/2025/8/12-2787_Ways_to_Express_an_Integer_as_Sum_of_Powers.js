// n 을 나타내는 합 경우의수 x는 제곱(고정)
// 제곱해도 홀수, 짝수는 유지됨
// n 보다 작은 y^x 들을 배열에 넣음
// 24분
var numberOfWays = function (n, x) {
    const MOD = 1e9 + 7
    const dp = Array(n + 1).fill(0)
    dp[0] = 1

    for (let i = 1; Math.pow(i, x) <= n; i++) {
        const power = Math.pow(i, x)

        for (let j = n; j >= power; j--) {
            dp[j] = (dp[j] + dp[j - power]) % MOD
        }
    }

    return dp[n]
};