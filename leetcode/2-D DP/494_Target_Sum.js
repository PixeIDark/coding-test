// 연산자로 target 만들어지는 경우의수

const nums = [1, 1, 1, 1, 1],
  target = 3;
// Output: 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3

// 음수와 양수 영역으로 나눠
var findTargetSumWays = function (nums, target) {
  const total = nums.reduce((a, b) => a + b, 0);

  if (Math.abs(target) > total) return 0;

  const dp = new Array(nums.length)
    .fill(0)
    .map(() => new Array(total * 2 + 1).fill(0));

  dp[0][total + nums[0]] = 1;
  dp[0][total - nums[0]] = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = -total; j <= total; j++) {
      if (dp[i - 1][total + j] > 0) {
        dp[i][total + j + nums[i]] += dp[i - 1][total + j];
        dp[i][total + j - nums[i]] += dp[i - 1][total + j];
      }
    }
  }

  return dp;
};

console.table(findTargetSumWays(nums, target));
