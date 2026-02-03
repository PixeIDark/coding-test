// 증감증 패턴이면 트루 반환
// 23분
var isTrionic = function (nums) {
  const n = nums.length;
  const arr = Array(3).fill(0);

  for (let i = 1; i < n; i++) {
    if (nums[i] <= nums[i - 1]) break;
    else arr[0]++;
  }

  for (let i = arr[0] + 1; i < n; i++) {
    if (nums[i] >= nums[i - 1]) break;
    else arr[1]++;
  }

  for (let i = arr[1] + arr[0] + 1; i < n; i++) {
    if (nums[i] <= nums[i - 1]) return false;
    else arr[2]++;
  }

  return arr.every(el => el > 0);
};