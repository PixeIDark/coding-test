// 누락된 숫자 찾기

const nums = [3, 0, 1];
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// 배열을 만들고(인덱스에 맞게 숫자를)
var missingNumber = function (nums) {
  const arr = Array.from({ length: nums.length + 1 }, (_, i) => i);

  for (const num of nums) {
    arr[num] = -1;
  }

  return Math.max(...arr);
};

console.log(missingNumber(nums));
