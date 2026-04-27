// 동: 0, 남: 1, 서: 2, 북: 3
// 79분
var hasValidPath = function (grid) {
  if (grid[0][0] === 5) return false;

  const n = grid.length;
  const m = grid[0].length;
  let vis = Array.from({length: n}, () => Array(m).fill(false));
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const streets = [
    {0: 0, 2: 2},
    {1: 1, 3: 3},
    {3: 2, 0: 1},
    {2: 1, 3: 0},
    {0: 3, 1: 2},
    {2: 3, 1: 0},
  ]; // undefined일시 false 반환

  const dfs = (y, x, prevDir) => {
    vis[y][x] = true;
    const street = grid[y][x] - 1;
    const currDir = streets[street][prevDir];

    if (currDir === undefined) return false;

    if (y === n - 1 && x === m - 1) return true;

    const ny = y + dirs[currDir][0];
    const nx = x + dirs[currDir][1];

    if (ny < 0 || nx < 0 || ny >= n || nx >= m) return false;

    if (vis[ny][nx]) return false;

    if (dfs(ny, nx, currDir)) return true;

    return false;
  };
  // 첫 방향은 남 || 동
  // 1, 6 이면 동
  // 2, 3 이면 남
  // 5 는 false 반환
  // 4는 어케해야할지.. 4일경우 dfs 두번 해버리기
  // 각 dfs 당 vis 초기화해야함
  if (grid[0][0] === 4) {
    if (dfs(0, 0, 2)) return true;
    vis = Array.from({length: n}, () => Array(m).fill(false));
    if (dfs(0, 0, 3)) return true;
    vis = Array.from({length: n}, () => Array(m).fill(false));
  }

  const startDir = grid[0][0] === 1 || grid[0][0] === 3 ? 0 : 1;

  return dfs(0, 0, startDir);
};