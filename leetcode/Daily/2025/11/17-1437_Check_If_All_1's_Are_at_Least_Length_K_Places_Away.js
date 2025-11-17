// 각 1이 k 이상 떨어져 있는지
// 1보일때 마다 j에 값 저장 이후 i - j 로 비교
// 6분
var kLengthApart = function (nums, k) {
  let j = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue;

    if (i - j <= k) return false;
    j = i;
  }

  return true;
};