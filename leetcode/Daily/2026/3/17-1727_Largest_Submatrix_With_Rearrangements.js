// 행을 재배열해서 가장 큰 직사각형 너비 반환
// 1. 모든 행을 하나로 합치고 각 열을 배열화해서 요소로 너비를 표현
// 2. 배열을 슬라이딩 윈도우 혹은 단조
// 28분
var largestSubmatrix = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  for (let x = 0; x < m; x++) {
    for (let y = 1; y < n; y++) {
      if (matrix[y][x] !== 0) {
        matrix[y][x] += matrix[y - 1][x];
      }
    }
  }

  matrix.map(row => row.sort((a, b) => b - a));
  let result = 0;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      const length = x + 1;
      const height = matrix[y][x];
      const width = length * height;
      result = Math.max(result, width);
    }
  }

  return result;
};