const nums = [3, 4, 5, 1, 2];
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

// Math.min 갈기면 최소값 바로나오는데, 의도랑 다름
// 회전된 배열을 원상복구 시키고 첫번째 인덱스 값을 추출해야함.
// l < r 이면 왼쪽으로 이동, l > r 이면 오른쪽으로 이동
// nums.length/2--floor값을 기준으로 삼아야해.
// for문
var findMin = function (nums) {
  for (let i = 0; i < nums.length; i++) {}
};

console.log(findMin(nums));
