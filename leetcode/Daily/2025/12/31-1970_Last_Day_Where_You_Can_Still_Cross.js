// 육지가 점진적으로 물에 잠기는데
// 가장 마지막까지 임의의 맨 윗줄에서 임의의 맨 아랫줄까지 이동할 수 있는 날 반환
// 0일 부터 시작
// 1. 0 ~ n일 까지 하나씩 물에 잠기는 것을 구현
// 2. 각 일마다 첫번째행 0 ~ m 에서 dfs 시작
// 3. 모든 경로가 vis를 공유해도 문제없음
// 55분
// TODO: union find로 풀기
var latestDayToCross = function (row, col, cells) {
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  const dfs = (y, x, vis, grid) => {
    if (vis[y][x] || !grid[y][x]) return false;
    vis[y][x] = true;

    if (y === row - 1) return true;

    let isSuccess = false;

    for (const [dy, dx] of dirs) {
      const ny = dy + y;
      const nx = dx + x;

      if (ny < 0 || nx < 0 || ny >= row || nx >= col) continue;

      if (dfs(ny, nx, vis, grid)) isSuccess = true;
    }

    return isSuccess;
  };

  const bs = (day) => {
    const grid = Array.from({length: row}, () => Array(col).fill(true));
    const vis = Array.from({length: row}, () => Array(col).fill(false));

    for (let i = 0; i < day; i++) {
      const [y, x] = cells[i];
      grid[y - 1][x - 1] = false;
    }

    let isMoved = false;

    for (let x = 0; x < col; x++) {
      if (dfs(0, x, vis, grid)) {
        isMoved = true;
        break;
      }
    }

    return isMoved;
  };

  let start = 0;
  let end = cells.length;

  while (start < end) {
    const day = Math.floor((start + end) / 2);

    if (bs(day)) start = day + 1;
    else end = day;
  }

  return start - 1;
};