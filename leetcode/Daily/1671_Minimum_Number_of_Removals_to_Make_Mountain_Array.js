// 요소의 높이로 산모양 만들기 1<2<3<1 or 1<2<3<2<1 몇개를 제거해야 산모양인지 최소제거

const nums = [4, 3, 2, 1, 1, 2, 3, 1]; // 1326
// Output: 3
// Explanation: One solution is to remove the elements at indices 0, 1, and 5, making the array nums = [1,5,6,3,1].

// 짝수와 홀수 두 가지 경우로 나뉨.짝수일 경우 왼쪽 오른쪽 기준 정해줘야함.
// 걍 nums 반갈죽해서 하나는 갈수록 커지고 하나는 갈수록 작아지면 되지않냐?
var minimumMountainRemovals = function (nums) {
  let result = 0;
  let n = ~~((nums.length - 1) / 2); // length8일시 3, length7일시 3

  for (let i = 1; i <= n; i++) {
    if (nums[i] <= nums[i - 1]) {
      result++;
    }
  }

  for (let i = n + 1; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) {
      result++;
    }
  }

  return result;
};

console.log(minimumMountainRemovals(nums));
