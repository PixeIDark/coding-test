// [0, 1, 2, 3, 5, 8, 13]
// dp[i] = dp[i - 1] + dp[i + 1]
// 9분
var climbStairs = function (n) {
  if (n === 1) return 1;

  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp.at(-1);
};