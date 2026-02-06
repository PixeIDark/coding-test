// 최소값 * k >= 최대값, 조건이 되기위해 최소로 제거해야하는 요소개수 출력
// 3 [1,6,2,9] => [1,2,6,9]
// [0,0,2,3]
// [3,6,18,27]
// 매 윈도우 크기를 저장하는 슬라이딩 윈도우 생성
// 조건이 맞으면 크기를 늘리고 right++, 아니면 크기를 줄임 left++
// 16분
var minRemoval = function (nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let maxWindow = 0;

  for (let l = 0, r = 0; r < n; r++) {
    while (nums[l] * k < nums[r]) {
      l++;
    }

    maxWindow = Math.max(maxWindow, r - l + 1);
  }

  return n - maxWindow;
};