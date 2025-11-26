// 아래 또는 오른쪽으로만 움직여서 (0, 0) => (n - 1 ,m -1) 까지 경로 생성
// 경로 숫자합이 k로 나누어 떨어지는 경로의 개수 반환
// 합이 나누어 덜어지지않더라도 더 합하면 나누어 떨어질수도있음
// 나머지를 개수를 저장함 경로 위치마다
// 45분
var numberOfPaths = function (grid, k) {
  const n = grid.length;
  const m = grid[0].length;
  const dp = Array.from({length: n}, () => Array.from({length: m}, () => Array(k).fill(0)));
  const mod = 1e9 + 7;
  dp[0][0][grid[0][0] % k] = 1;

  // y-1 x-1 을 합해야 현재임
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (y === 0 && x === 0) continue;

      const value = grid[y][x] % k;

      for (let i = 0; i < k; i++) {
        const value1 = y > 0 ? dp[y - 1][x][i] : 0;
        const value2 = x > 0 ? dp[y][x - 1][i] : 0;

        dp[y][x][(i + value) % k] = (value1 + value2) % mod;
      }
    }
  }

  return dp[n - 1][m - 1][0];
};