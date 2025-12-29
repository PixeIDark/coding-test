// dp
// nums = [1, 2, 3], target = 4
// [1, 2, 4]
// 1을 만들수 있는 가짓수는 1개
// 2는 나 자신 + 1가짓수
// 3는 나 자신 + 1가짓수 + 2가짓수
// 4는 dp[1] + dp[3] + dp[2]
// 17분
var combinationSum4 = function (nums, target) {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      dp[i] += dp[i - num] ?? 0;
    }
  }

  return dp.at(-1);
};