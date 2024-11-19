// 길이가 k인 부분 배열의 합 중 최대 값. 단, 중복인 요소가 있으면 안됨.
// A subarray is a contiguous non-empty sequence of elements within an array.

const nums = [5, 3, 3, 1, 1];
k = 3;
// Output: 15
// Explanation: The subarrays of nums with length 3 are:
//     - [1,5,4] which meets the requirements and has a sum of 10.
// - [5,4,2] which meets the requirements and has a sum of 11.
// - [4,2,9] which meets the requirements and has a sum of 15.
// - [2,9,9] which does not meet the requirements because the element 9 is repeated.
// - [9,9,9] which does not meet the requirements because the element 9 is repeated.
//     We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions

// 내림차순 정렬 후, 본래의 인덱스도 옆에 넣어줌. => 연속되는지 확인
var maximumSubarraySum = function (nums, k) {
  const map = new Map();
  let sum = 0;
  let result = 0;

  for (let i = 0; i < k; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    sum += nums[i];
  }

  if (map.size === k) result = sum;

  for (let i = k; i < nums.length; i++) {
    sum -= nums[i - k];
    map.set(nums[i - k], map.get(nums[i - k]) - 1);
    if (map.get(nums[i - k]) === 0) map.delete(nums[i - k]);

    sum += nums[i];
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);

    if (map.size === k) result = Math.max(result, sum);
  }

  return result;
};

console.log(maximumSubarraySum(nums, k));
