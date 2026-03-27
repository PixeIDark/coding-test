// k % m === v 만큼 이동
// mat[n][m]과 mat[n][(m +- (v % m)]이 하나라도 다르면 false
// 1 2 3 1 2 3=> 3 1 2, v === 2
// 1 - 2 === -1, 음수면 m - 1
// mat 행 * 2 하면 편할지도 짝수면 오른쪽행(-) 홀수면 왼쪽행(+)
// 17분
var areSimilar = function (mat, k) {
  mat = mat.map(row => [...row, ...row]);
  const n = mat.length;
  const m = mat[0].length;
  const v = k % (m / 2);

  for (let y = 0; y < n; y += 2) {
    // 짝수전용 짝수는 왼쪽 이동
    for (let x = m / 2; x < m; x++) {
      if (mat[y][x] !== mat[y][x - v]) return false;
    }
  }

  for (let y = 1; y < n; y += 2) {
    // 홀수전용 오른쪽 이동
    for (let x = 0; x < m / 2; x++) {
      if (mat[y][x] !== mat[y][x + v]) return false;
    }
  }

  return true;
};