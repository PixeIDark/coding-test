// dfs 경로 탐색중 들린곳은 마킹해서 초기 시작 위치 스킵
// 20분
var longestIncreasingPath = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const dp = Array.from({length: n}, () => Array(m).fill(0));
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  // dp 만들어서 각 좌표별 최대 기록 남겨두는거
  // 해당 위치에 들렸는데, 해당 위치 최대 기록보다 낮거나 같으면 즉시 리턴
  // 최대 기록보다 높으면 갱신 후 계속 진행
  const dfs = (y, x, prev, count) => {
    if (dp[y][x] !== 0) return dp[y][x];

    const curr = matrix[y][x];
    let max = 1;

    for (const [dy, dx] of dirs) {
      const ny = dy + y;
      const nx = dx + x;
      if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      if (matrix[ny][nx] >= curr) continue;

      max = Math.max(max, dfs(ny, nx, curr) + 1);
    }

    dp[y][x] = max;
    return max;
  };

  let result = 0;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      result = Math.max(result, dfs(y, x, -1, 0));
    }
  }

  return result;
};