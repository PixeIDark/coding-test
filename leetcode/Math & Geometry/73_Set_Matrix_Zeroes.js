// 0 위치 기준 열과 행은 모두 0으로 변함.

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// 0에 전염된 얘들 따로 격리조치 취해주고
// 나중에 바꿔서 넣어주자.
var setZeroes = function (matrix) {
  const left = (y, x) => {
    if (x < 0) return;
    if (matrix[y][x] === 0) return;
    matrix[y][x] = "a";

    left(y, x - 1);
  };

  const up = (y, x) => {
    if (y < 0) return;
    if (matrix[y][x] === 0) return;
    matrix[y][x] = "a";

    up(y - 1, x);
  };

  const right = (y, x) => {
    if (x >= matrix[0].length) return;
    if (matrix[y][x] === 0) return;
    matrix[y][x] = "a";

    right(y, x + 1);
  };

  const down = (y, x) => {
    if (y >= matrix.length) return;
    if (matrix[y][x] === 0) return;
    matrix[y][x] = "a";

    down(y + 1, x);
  };

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === 0) {
        left(y, x - 1);
        up(y - 1, x);
        right(y, x + 1);
        down(y + 1, x);
      }
    }
  }

  matrix = matrix.map((a) => a.map((b) => (b === "a" ? 0 : b)));
};

console.log(setZeroes(matrix));
