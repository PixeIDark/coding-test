// 인접한 집을 털 수없는 상황에서 모든 집 털었을 때 가장 큰 수익

const nums = [1, 5, 3];
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// income = [2, 7, 11 or 7 => 11, 10 or 5 => 10, 12 or 10]
// income = [2, 7, 11, 10, 12]
// curr = twoPrev + curr or threePrev + curr
var rob = function (nums) {
  if (nums.length === 3) {
    return Math.max(nums[2] + nums[0], nums[1]);
  } else if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  } else if (nums.length === 1) {
    return nums[0];
  }

  nums[2] = nums[2] + nums[0];

  for (let i = 3; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 2], nums[i - 3]) + nums[i];
  }

  return Math.max(...nums);
};

console.log(rob(nums));
