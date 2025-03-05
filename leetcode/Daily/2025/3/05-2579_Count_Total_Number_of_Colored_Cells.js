// n 분 후 파란색 바닥 개수 구하기

const n = 2
// Output: 5
// Explanation: After 2 minutes, there are 4 colored cells on the boundary and 1 in the center, so we return 5.

// 1 = 1, 2 = 5, 3 = 13, 4 = 25, 5 = 41
// 1 * 4, 2 * 4, 4 * 4, 6 * 4,
// dp[0] = 1
// dp[i] = dp[i-1] + i * 4
// 2 = 1 + 1 * 4, 3 = 1 + 3 * 4, 4 = 1 + 7 * 4, 5 = 1 + 13 * 4
// 0 1 3 6 10
// (n-1) * 2 * n  ... + 1
var coloredCells = function (n) {
    const dp = Array(n).fill(1)

    for (let i = 1; i < n; i++) {
        dp[i] = dp[i - 1] + i * 4
    }

    return dp[n - 1]
};

console.log(coloredCells(n));