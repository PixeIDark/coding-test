// target 들어있는지 확인 없으면 false O(log(m * n))

const matrix = [
  [1, 4, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;
// Output: true

// target 탐색을 어디서부터 정할지 기준 필요.
// for문으로 배열 정리하자.
var searchMatrix = function (matrix, target) {
  let a = [];
  for (let i = 0; i < matrix.length; i++) {
    a = [...a, ...matrix[i]];
  }

  let l = 0;
  let r = a.length - 1;

  while (l <= r) {
    let m = Math.floor((r + l) / 2);

    if (a[m] === target) {
      return true;
    } else if (a[m] < target) {
      l = m + 1;
    } else r = m - 1;
  }

  return false;
};

console.log(searchMatrix(matrix, target));
