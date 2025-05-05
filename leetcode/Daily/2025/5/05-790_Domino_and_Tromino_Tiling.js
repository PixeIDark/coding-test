// 가짓수 반환

const n = 5
// Output: 5
// Explanation: The five different ways are show above.

// 1 + 4 + 3 + 4 + 2 + 4 = 16
// n. 1 = 1, 2 = 2, 3 = 5, 4 = 11, 5 = 24
// dp[n] = dp[n-1] * 2 + dp[n-3]
// 공책없으면 못품 109 + 7.
var numTilings = function (n) {
    const dp = Array(n + 1).fill(1)
    const MOD = 1e9 + 7

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] * 2 + (dp[i - 3] ?? 0)) % MOD
    }

    return dp[n]
};

console.log(numTilings(n))