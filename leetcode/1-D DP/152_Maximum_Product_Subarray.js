// 죾이어지는 부분 배열중 가장 큰 값

const nums = [
  0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, -10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 0,
];

// Output: 6
// Explanation: [2,3] has the largest product 6.

// 배열 만들고 index마다 max값 저장 하고 꺼내쓰는 방식
// 음수가 짝수면은 걍 다곱하면됨 0 을제외하고
// 음수가 1이 아닌 홀수면 반갈죽 하고 처음두번째와 마지막 두번째 부터 곱한값중 큰값
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];

  const calculator = (nums) => {
    const minusIndex = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < 0) minusIndex.push(i);
    }

    const multiply = (nums) => {
      if (nums.length === 1) return nums[0];
      if (nums.length === 0) return -Infinity;

      let result = nums[0];
      for (let i = 1; i < nums.length; i++) {
        result *= nums[i];
      }

      return result;
    };

    if (minusIndex.length === 1) {
      return Math.max(
        multiply(nums.slice(0, minusIndex[0])),
        multiply(nums.slice(minusIndex[0] + 1, nums.length))
      );
    }

    if (minusIndex.length % 2 === 0) return multiply(nums);
    else {
      return Math.max(
        multiply(nums.slice(0, minusIndex[minusIndex.length - 1])),
        multiply(nums.slice(minusIndex[0] + 1, nums.length))
      );
    }
  };

  let arr = [];
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      max = Math.max(calculator(arr), max);
      arr = [];
      continue;
    }
    arr.push(nums[i]);

    if (nums.length - 1 === i) max = Math.max(calculator(arr), max);
  }

  return max;
};

// var maxProduct = function (nums) {
//   // 맥스와 마이너스 배열을 만듬.
//   const maxArr = new Array(nums.length).fill(-Infinity);
//   const minusArr = new Array(nums.length).fill(0);

//   maxArr[0] = nums[0];
//   minusArr[0] = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     // dp[i - 1] 이게 max가 되면 dp[i] 0으로 초기화
//     minusArr[i] = minusArr[i - 1] * nums[i];

//     if (
//       maxArr[i - 1] >= maxArr[i - 1] * nums[i] &&
//       maxArr[i - 1] >= minusArr[i - 1] * nums[i]
//     ) {
//       maxArr[i] = nums[i];
//     } else
//       maxArr[i] = Math.max(maxArr[i - 1] * nums[i], minusArr[i - 1] * nums[i]);
//   }

//   return Math.max(...maxArr);
// };

console.log(maxProduct(nums));
