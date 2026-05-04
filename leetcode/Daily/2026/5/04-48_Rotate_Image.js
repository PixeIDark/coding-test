// [y][x] => [y][m - 1 - x]
// [y][m - 1 - x] => [n - 1 - y][m - 1 - x]
// [n - 1 - y][m - 1 - x] => [n - 1 - y][x]
// [n - 1 - y][x] => [y][x]
// 23분
var rotate = function (matrix) {
  const n = matrix.length;

  for (let y = 0; y < Math.floor(n / 2); y++) {
    for (let x = y; x < n - 1 - y; x++) {
      const one = matrix[y][x];
      const two = matrix[x][n - 1 - y];
      const three = matrix[n - 1 - y][n - 1 - x];
      const four = matrix[n - 1 - x][y];

      matrix[x][n - 1 - y] = one;
      matrix[n - 1 - y][n - 1 - x] = two;
      matrix[n - 1 - x][y] = three;
      matrix[y][x] = four;
    }
  }
};