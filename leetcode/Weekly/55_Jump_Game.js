// 요소 = 최대 점프 길이 마지막 인덱스에 도달하는지.

const nums = [2, 3, 1, 1, 4];
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// bt기본. 2에서 2칸 점프할수도있고 1칸 점프할수도 있어.
// for문으로 점프 여러 칸 할수 있게 ㄱㄱ.
var canJump = function (nums) {
  let max = 0;
  for (let i = 0; i <= max && i < nums.length; i++) {
    max = Math.max(max, i + nums[i]);
    if (max >= nums.length - 1) return true;
  }
  return false;
};

console.log(canJump(nums));
