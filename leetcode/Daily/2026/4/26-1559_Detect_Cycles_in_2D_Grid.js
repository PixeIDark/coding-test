// 길이 4이상의 사이클이 유효한지. 재방문 불가능
// 19분
var containsCycle = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const vis = Array.from({length: n}, () => Array(m).fill(false));
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];

  const dfs = (y, x, py, px, char) => {
    vis[y][x] = true;

    for (const [dy, dx] of dirs) {
      const ny = dy + y;
      const nx = dx + x;

      if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      if (py === ny && px === nx) continue;
      if (grid[ny][nx] !== char) continue;

      if (vis[ny][nx]) return true;
      if (dfs(ny, nx, y, x, char)) return true;
    }
  };


  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (!vis[y][x] && dfs(y, x, -1, -1, grid[y][x])) return true;
    }
  }

  return false;
};