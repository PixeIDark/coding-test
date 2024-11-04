// 요소의 높이로 산모양 만들기 1<2<3<1 or 1<2<3<2<1 몇개를 제거해야 산모양인지 최소제거

const nums = [4, 3, 2, 1, 1, 2, 3, 1]; // 1326
// Output: 3
// Explanation: One solution is to remove the elements at indices 0, 1, and 5, making the array nums = [1,5,6,3,1].

// 짝수와 홀수 두 가지 경우로 나뉨.짝수일 경우 왼쪽 오른쪽 기준 정해줘야함.
// 걍 nums 반갈죽해서 하나는 갈수록 커지고 하나는 갈수록 작아지면 되지않냐?
var minimumMountainRemovals = function (nums) {
  const n = nums.length;

  const l = new Array(n).fill(1);
  const r = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        l[i] = Math.max(l[i], l[j] + 1);
      }
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = n - 1; j > i; j--) {
      if (nums[i] > nums[j]) {
        r[i] = Math.max(r[i], r[j] + 1);
      }
    }
  }

  let result = n;
  for (let i = 1; i < n; i++) {
    if (l[i] > 1 && r[i] > 1) {
      let d = n - (l[i] + r[i] - 1);
      result = Math.min(result, d);
    }
  }

  return result;
};

console.log(minimumMountainRemovals(nums));
