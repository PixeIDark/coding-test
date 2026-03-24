// 정과역 프리픽스 2-dp 두개를 서로 참조
// 24분
var constructProductMatrix = function (grid) {
  const mod = 12345;
  const n = grid.length;
  const m = grid[0].length;
  const p = Array.from({length: n}, () => Array(m).fill(1));
  let prefix = 1;

  for (let y = n - 1; y >= 0; y--) {
    for (let x = m - 1; x >= 0; x--) {
      p[y][x] = prefix;
      prefix = (prefix * grid[y][x]) % mod;
    }
  }

  prefix = 1;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      p[y][x] = (prefix * p[y][x]) % mod;
      prefix = (prefix * grid[y][x]) % mod;
    }
  }

  return p;
};