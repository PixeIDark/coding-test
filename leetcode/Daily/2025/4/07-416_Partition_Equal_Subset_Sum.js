// 두 배열로 분할해서 요소 총합이 같은지

const nums = [1, 5, 11, 5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// 총합을 구한다.
// 총합/2 되는 게 있나 찾아본다.
// 이걸로 dp 길이 하고, dp[0] = true
var canPartition = function (nums) {
    const total = nums.reduce((sum, num) => sum + num, 0);
    if (total % 2 === 1) return false;

    const target = total / 2
    const dp = Array(target + 1).fill(false);
    dp[0] = true

    for (const num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num]
        }
    }

    return dp[target]
};

console.log(canPartition(nums));