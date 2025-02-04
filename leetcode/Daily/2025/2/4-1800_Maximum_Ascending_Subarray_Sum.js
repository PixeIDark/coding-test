// 오름차순 제일 큰 합

const nums = [12, 17, 15, 13, 10, 11, 12];
// Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.

var maxAscendingSum = function (nums) {
  let result = 0;
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    const prev = nums[i - 1];

    if (curr <= prev) {
      result = Math.max(result, sum);
      sum = curr;
    } else sum += curr;
  }

  return Math.max(result, sum);
};

console.log(maxAscendingSum(nums));
