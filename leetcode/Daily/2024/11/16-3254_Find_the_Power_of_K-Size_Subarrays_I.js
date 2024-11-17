// 길이가 k 인 부분 배열 만들어서 엄격한 오름차 순 정렬이 되면 최대 값 반환, 정렬 안되면 -1

const nums = [1, 2, 3, 4, 3, 2, 5],
  k = 3;
// Output: [3,4,-1,-1,-1]
// Explanation: There are 5 subarrays of nums of size 3:
//     [1, 2, 3] with the maximum element 3.
//     [2, 3, 4] with the maximum element 4.
//     [3, 4, 3] whose elements are not consecutive.
//     [4, 3, 2] whose elements are not sorted.
//     [3, 2, 5] whose elements are not consecutive.

// 무식하게 ㄱㄱ
var resultsArray = function (nums, k) {
  const result = [];

  for (let i = 0; i <= nums.length - k; i++) {
    let prev = nums[i];
    if (k === 1) {
      result.push(prev);
      continue;
    }
    let max = prev;

    for (let j = i + 1; j < k + i; j++) {
      if (prev + 1 !== nums[j]) {
        result.push(-1);
        break;
      }
      prev = nums[j];
      max = Math.max(max, nums[j]);
      if (j + 1 === k + i) {
        result.push(max);
      }
    }
  }

  return result;
};

console.log(resultsArray(nums, k));
