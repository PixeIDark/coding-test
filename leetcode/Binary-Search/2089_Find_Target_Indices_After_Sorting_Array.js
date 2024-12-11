// 오름차순으로 정렬하고, target 인 인덱스들 반환

const nums = [1, 2, 5, 2, 3],
  target = 5;
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
//     The indices where nums[i] == 2 are 1 and 2.

// 이진 탐색으로 찾은 left 에서 쭉 탐색
var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    // [1, 2, 2, 3, 5]
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let result = [];

  for (let i = left; i < nums.length; i++) {
    if (nums[i] === target) result.push(i);
    else break;
  }

  return result;
};

// var targetIndices = function(nums, target) {
//     // 타겟보다 작은 수의 개수와 타겟과 같은 수의 개수를 카운트
//     let smaller = 0;
//     let equal = 0;
//
//     // 한 번의 순회로 카운트
//     for (const num of nums) {
//         if (num < target) smaller++;
//         else if (num === target) equal++;
//     }
//
//     // 결과 배열 생성
//     const result = [];
//     for (let i = 0; i < equal; i++) {
//         result.push(smaller + i);
//     }
//
//     return result;
// }

console.log(targetIndices(nums, target));
