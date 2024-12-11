// 최대의 아름다움 구하기

const nums = [4, 6, 1, 2],
  k = 2;
// Output: 3
// Explanation: In this example, we apply the following operations:
//     - Choose index 1, replace it with 4 (from range [4,8]), nums = [4,4,1,2].
//     - Choose index 3, replace it with 4 (from range [0,4]), nums = [4,4,1,4].
//     After the applied operations, the beauty of the array nums is 3 (subsequence consisting of indices 0, 1, and 3).
// It can be proven that 3 is the maximum possible length we can achieve.

// A[j] - A[i] ≤ 2 * k
var maximumBeauty = function (nums, k) {
  nums.sort((a, b) => a - b);

  let start = 0;
  let end = 0;
  let max = 0;

  while (end < nums.length) {
    if (nums[end] - nums[start] <= 2 * k) end++;
    else start++;

    max = Math.max(max, end - start);
  }

  return max;
};

console.log(maximumBeauty(nums, k));
