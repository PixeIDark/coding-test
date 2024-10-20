// 부분 배열 가장 큰의 합.

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// dt
var maxSubArray = function (nums) {
  let n = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    n = Math.max(nums[i], nums[i] + n);
    max = Math.max(max, n);
  }

  return max;
};

console.log(maxSubArray(nums));
