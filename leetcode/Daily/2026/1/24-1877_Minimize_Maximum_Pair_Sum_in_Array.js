// 정렬 후 two pointer 최대값 반환
// 6분
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let max = 0;

  for (let l = 0, r = nums.length - 1; l < r; l++, r--) {
    max = Math.max(max, nums[l] + nums[r]);
  }

  return max;
};