// [0][0]의 요소를 포함하는 k보다 작은 행렬의 개수
// 1. 행을 prefix 형식으로 바꾸기
// 2. 행 - 열 반복문 돌려서 찾기
// 12분
var countSubmatrices = function (grid, k) {
  const n = grid.length;
  const m = grid[0].length;

  for (let y = 0; y < n; y++) {
    for (let x = 1; x < m; x++) {
      grid[y][x] += grid[y][x - 1];
    }
  }

  let result = 0;

  for (let x = 0; x < m; x++) {
    let sum = 0;

    for (let y = 0; y < n; y++) {
      sum += grid[y][x];

      if (sum <= k) result++;
      else break;
    }
  }

  return result;
};