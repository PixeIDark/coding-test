// 부분배열 개수 반환

const nums = [65, 66, 67, 66, 66, 65, 64, 65, 65, 64];
// Output: 8
// Explanation:
//     Continuous subarray of size 1: [5], [4], [2], [4].
//     Continuous subarray of size 2: [5,4], [4,2], [2,4].
//     Continuous subarray of size 3: [4,2,4].
//     There are no subarrys of size 4.
// Total continuous subarrays = 4 + 3 + 1 = 8.
// It can be shown that there are no more continuous subarrays.

// [1, 2] : [1, 2]  3
// [1, 2, 3]: 2: 2개, 3: 1개 6
// [1, 2, 2, 3]: 2: 3개, 3: 2개, 4: 1개 10
// [1, 2, 2, 2, 3]: 2: 4개, 3: 3개, 4: 2개, 5: 1개  15

// 0  1  2  3  4  5
//  1  2  3  4  5
// 각 인덱스 마다 한계에 부딫치면 다음 인덱스 시작하는걸세.
var continuousSubarrays = function (nums) {
  // 첫 시작 1
  // 동료 늘을 때마다 + length
  // 동료가 안된 놈 인덱스 기억하고 걔부터 시작
  let result = 0;
  let k = 0;
  let max = [0, 0];
  let min = [Infinity, 0];

  for (let j = k; j < nums.length; j++) {
    let combo = 0;
    result += combo;
    if (max[0] < nums[j]) {
      max[0] = nums[j];
      max[1] = j;
    }

    if (min[0] > nums[j]) {
      min[0] = nums[j];
      min[1] = j;
    }

    // 맥스, 민 인덱스와 저장해놓고 비교 막히면 인덱스 + 1부터 시작.
    for (let i = j + 1; i < nums.length; i++) {
      if (max[0] < nums[i]) {
        max[0] = nums[i];
        max[1] = i;
      }

      if (min[0] > nums[i]) {
        min[0] = nums[i];
        min[1] = i;
      }

      const diff = max[0] - min[0];
      if (i === nums.length - 1) j = i;

      console.log(max, min, diff, i, j);
      if (0 <= diff && diff <= 2) {
        combo++;
        result += combo;
      } else {
        j = Math.min(max[1], min[1]);
        max = [0, 0];
        min = [Infinity, 0];
        break;
      }
    }
  }
  return result + nums.length;
};

console.log(continuousSubarrays(nums));
