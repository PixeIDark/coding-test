// k 크기의 임의의 그룹을 만들고, 해당 그룹의 최고점과 최소점의 최소 차이 반환
// 오름차 정렬, i 와 i + k 비교
// 24분
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let min = Infinity;

  for (let i = 0; i <= n - k; i++) {
    min = Math.min(min, nums[i + k - 1] - nums[i]);
  }

  return min;
};