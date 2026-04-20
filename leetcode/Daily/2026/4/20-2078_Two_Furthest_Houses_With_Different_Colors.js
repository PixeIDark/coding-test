// Test data are generated such that at least two houses have different colors.
// 투 포인트
// max값보다 j - i 값이 작으면 즉시 종료
// 6분
var maxDistance = function (colors) {
  const n = colors.length;
  let max = 0;

  for (let i = 0; i < n; i++) {
    if (max >= n - 1 - i) break;

    for (let j = n - 1; j > i; j--) {
      if (colors[i] !== colors[j]) {
        max = Math.max(max, j - i);
        break;
      }
    }
  }

  return max;
};