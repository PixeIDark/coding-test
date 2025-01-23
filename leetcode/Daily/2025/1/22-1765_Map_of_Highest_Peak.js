// 동서남북 기준 물에서 멀어질수록 +1 높아짐

const isWater = [
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
];
// Output: [[1,0],[2,1]]
// Explanation: The image shows the assigned heights of each cell.
//     The blue cell is the water cell, and the green cells are the land cells.

// 일단 물 기준으로 1로 바꿔버리자
// -1 들을 순회해서 동서남북 탐색하고 그 중 최소값 + 1해줘라 탐색시(0은 제외)
var highestPeak = function (isWater) {
  const m = isWater.length;
  const n = isWater[0].length;
  const board = Array.from({ length: m }, () => Array(n).fill(-1));
  let arr = [];

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (isWater[y][x] === 0) continue;
      board[y][x] = 0;
      arr.push([y, x, 0]);
    }
  }

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  while (arr.length) {
    const arr2 = [];
    for (const [y, x, h] of arr) {
      for (const [dy, dx] of direction) {
        const ny = dy + y;
        const nx = dx + x;
        if (ny >= 0 && nx >= 0 && ny < m && nx < n && board[ny][nx] === -1) {
          board[ny][nx] = h + 1;
          arr2.push([ny, nx, h + 1]);
        }
      }
    }
    arr = arr2;
  }
  return board;
};

console.log(highestPeak(isWater));
