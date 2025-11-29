// 3분
var minOperations = function (nums, k) {
  const total = nums.reduce((a, b) => a + b, 0);

  return total % k;
};