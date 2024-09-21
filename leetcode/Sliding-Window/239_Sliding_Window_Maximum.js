const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// 4개씩 slice로 묶어가지고 max값 꺼내면 되지않냐?
// 시간 초과 ㅋㅋㅋㅋ
// 1. max 라는 친구 만들어서 값을 넣고 이를 뛰어넘는 녀석이
var maxSlidingWindow = function (nums, k) {
  // let arr = [];
  // for (let i = 0; i + k <= nums.length; i++) {
  //   let max = Math.max(...nums.slice(i, i + k));
  //   arr.push(max);
  // }
  // return arr;
};

console.log(maxSlidingWindow(nums, k));
