// 왼쪽 오른쪽 나누ㅡ고 왼쪽 더크거나 같으면 ++

const nums = [2, 3, 1, 0];
// Output: 2
// Explanation:
//     There are three ways of splitting nums into two non-empty parts:
//     - Split nums at index 0. Then, the first part is [10], and its sum is 10. The second part is [4,-8,7], and its sum is 3. Since 10 >= 3, i = 0 is a valid split.
// - Split nums at index 1. Then, the first part is [10,4], and its sum is 14. The second part is [-8,7], and its sum is -1. Since 14 >= -1, i = 1 is a valid split.
// - Split nums at index 2. Then, the first part is [10,4,-8], and its sum is 6. The second part is [7], and its sum is 7. Since 6 < 7, i = 2 is not a valid split.
//     Thus, the number of valid splits in nums is 2.

var waysToSplitArray = function (nums) {
  let right = nums.reduce((acc, num) => acc + num, 0);
  let left = 0;
  let result = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i];
    right -= nums[i];

    if (left >= right) result++;
  }

  return result;
};

console.log(waysToSplitArray(nums));
