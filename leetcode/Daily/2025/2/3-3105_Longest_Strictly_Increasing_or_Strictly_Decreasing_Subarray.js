// 증가나 감소 구간 중 가장 긴 길이 반환 최소1

const nums = [3, 3, 3, 3];
// Output: 2
// Explanation: The strictly increasing subarrays of nums are [1], [2], [3], [3], [4], and [1,4].
//              The strictly decreasing subarrays of nums are [1], [2], [3], [3], [4], [3,2], and [4,3].
//              Hence, we return 2.

var longestMonotonicSubarray = function (nums) {
  let stance = 0;
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    const prev = nums[i - 1];
    const curr = nums[i];

    if (prev === curr) stance = 0;

    if (prev < curr) stance = stance < 0 ? 1 : stance + 1;

    if (prev > curr) stance = stance > 0 ? -1 : stance - 1;

    result = Math.max(Math.abs(stance) + 1, result);
  }

  return result;
};

console.log(longestMonotonicSubarray(nums));
