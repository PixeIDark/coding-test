// 자르기해서 두 영역의 합이 같게할 수 있는지
// 모든합이 홀수인경우 불가능함
// 행과 열합들을 구해서 이중 모든합의 절반이 있는지 체크
// 14분
var canPartitionGrid = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const total = grid.reduce((rowSum, row) => rowSum + row.reduce((sum, x) => sum + x, 0), 0);

  if (total % 2 === 1) return false;

  let sum = 0;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      sum += grid[y][x];
    }

    if (sum * 2 === total) return true;
  }

  sum = 0;

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      sum += grid[y][x];
    }

    if (sum * 2 === total) return true;
  }

  return false;
};