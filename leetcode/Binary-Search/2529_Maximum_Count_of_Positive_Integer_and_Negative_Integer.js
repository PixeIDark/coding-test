// 음수와 양수 중 최대 개수 출력

const nums = [5, 20, 66, 1314];
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

// 0 보다 큰얘 탐색해 인덱스 누군지
// 걔 찾으면 length - 인덱스 하면 그게 양수 개수
// 반대로도 탐색해서 인덱스 - length 그게 음수 개수
var maximumCount = function (nums) {
  // 음수 기준으로 찾자
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < 0) left = mid + 1;
    else right = mid - 1;
  }

  const maxNegativeIndex = right + 1;
  let minPositiveIndex = nums.length;

  for (let i = right + 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      minPositiveIndex = i;
      break;
    }
  }

  return Math.max(maxNegativeIndex, nums.length - minPositiveIndex);
};

console.log(maximumCount(nums));
