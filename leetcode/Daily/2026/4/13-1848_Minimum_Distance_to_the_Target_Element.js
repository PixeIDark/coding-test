// It is guaranteed that target exists in nums.
// start에서 target까지의 최소 거리, 좌우 두 방향 모두 가능
// 9분
var getMinDistance = function (nums, target, start) {
  const n = nums.length;
  let left = start;
  let right = start;

  while (true) {
    if (target === nums[left]) return start - left;
    if (target === nums[right]) return right - start;

    left--;
    right++;
  }
};