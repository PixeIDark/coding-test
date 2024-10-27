// < 연속으로 되는 가장 긴 거 길이

const nums = [0, 1, 0, 3, 2, 3];
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// 배열 길이에 맞춰서 최대 length 값을 저장해놓고, 이전 값을 사용하자.
// [4,10,4,3,8,9]
// 3
// 걍 구조가 잘못됨 뜯어고쳐야함
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  let prev = nums[0];
  let min = nums[0];
  let minIndex = 0;

  // min값을 따로 저장해주고 else의 상황을 겪고나면
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > prev) {
      dp[i] = dp[i - 1] + 1;
      min = prev;
    } else if (min < nums[i]) {
      dp[i] = dp[minIndex] + 1;
    }

    prev = nums[i];
    if (min === nums[i]) {
      minIndex = i;
    }
  }

  console.log(nums, dp);
  return Math.max(...dp);
};

console.log(lengthOfLIS(nums));
