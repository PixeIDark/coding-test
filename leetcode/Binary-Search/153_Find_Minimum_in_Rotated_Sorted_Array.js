const nums = [4, 5, 6, 7, 0, 1, 2];
// Output: 0
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

// Math.min 갈기면 최소값 바로나오는데, 의도랑 다름
// 회전된 배열을 원상복구 시키고 첫번째 인덱스 값을 추출해야함.
// l < r 이면 왼쪽으로 이동, l > r 이면 오른쪽으로 이동
// nums.length/2--floor값을 기준으로 삼아야해.
// for문
// nums = [0, 1, 2, 4, 5, 6, 7]
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let m = Math.floor((l + r) / 2);

    if (nums[m] > nums[r]) {
      l = m + 1;
    } else r = m;
  }
  return nums[l];
};

console.log(findMin(nums));
