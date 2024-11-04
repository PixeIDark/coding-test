// 90도 회전

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
// Output: [
// [15, 13, 2, 5],
// [14, 3, 4, 1],
// [12, 6, 8, 9],
// [16, 7, 10, 11],
// ];

// 90도 회전시 x = y
// [3][0] => [0][0]
// [3][1] => [1][0]
// [3][2] => [2][0]
// [3][3] => [3][0]
var rotate = function (matrix) {
  const n = matrix.length;
  const result = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      result[x][n - 1 - y] = matrix[y][x];
    }
  }

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      matrix[y][x] = result[y][x];
    }
  }

  return matrix;
};

console.log(rotate(matrix));
