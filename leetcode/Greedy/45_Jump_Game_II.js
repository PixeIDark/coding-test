// 최소 점프 거리.

const nums = [1, 1, 2, 1, 1];
// Output: 2
// It's guaranteed that you can reach nums[n - 1].
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// bt로 스택 증가형식으로 승부보다 스택 가장적으면 최소 점프.
var jump = function (nums) {
  if (nums.length <= 1) return 0;
  let jump = 0;
  let next = 0;
  let curr = 0;

  for (let i = 0; i < nums.length; i++) {
    next = Math.max(next, i + nums[i]);

    if (i === curr) {
      curr = next;
      jump++;
      if (curr >= nums.length - 1) break;
    }
  }

  return jump;
};

console.log(jump(nums));
