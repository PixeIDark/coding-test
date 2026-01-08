// 1dp에서 해당 요소의 최대 값구하기
// 2dp에서 1dp - 1을 이어받고 최대 값 구하기
// nums1 = [2,1,-2,5], nums2 = [3,0,-6]
// [[6, 6, 6],
//  [6, 6, 6],
//  [6, 6, 18],
//  [15, 15, 18]]
// 30분
var maxDotProduct = function (nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;
  const dp = Array.from({length: n + 1}, () => Array(m + 1).fill(-Infinity));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const prev = dp[i - 1][j];
      const next = dp[i][j - 1];
      const curr = dp[i - 1][j - 1];
      dp[i][j] = Math.max(prev, next, curr + nums1[i - 1] * nums2[j - 1], nums1[i - 1] * nums2[j - 1]);
    }
  }

  return dp.at(-1).at(-1);
};