// [0][0] 에서 [n - 1][m - 1] 까지 이동하면서 최대곱 구하기(비음수) 음수면 -1 반환
// 각 단계에서 오른쪽 또는 아래쪽으로만 이동할 수 있습니다.
// 연산마다 모듈하는게 아닌 최종값에만 모듈
// 양수음수 2-dp 두개로 가능
// 34분
var maxProductPath = function (grid) {
  const mod = 1e9 + 7;
  const n = grid.length;
  const m = grid[0].length;
  const max = Array.from({length: n}, () => Array(m).fill(0));
  const min = Array.from({length: n}, () => Array(m).fill(0));
  max[0][0] = grid[0][0];
  min[0][0] = grid[0][0];

  for (let y = 1; y < n; y++) {
    max[y][0] = max[y - 1][0] * grid[y][0];
    min[y][0] = min[y - 1][0] * grid[y][0];
  }

  for (let x = 1; x < m; x++) {
    max[0][x] = max[0][x - 1] * grid[0][x];
    min[0][x] = min[0][x - 1] * grid[0][x];
  }

  // 왼쪽이랑 위쪽과 곱하고 비교
  for (let y = 1; y < n; y++) {
    for (let x = 1; x < m; x++) {
      const num = grid[y][x];
      const arr = [max[y - 1][x] * num, max[y][x - 1] * num, min[y - 1][x] * num, min[y][x - 1] * num];

      max[y][x] = Math.max(...arr);
      min[y][x] = Math.min(...arr);
    }
  }

  if (max[n - 1][m - 1] < 0) return -1;
  else return max[n - 1][m - 1] % mod;
};