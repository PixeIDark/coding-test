// 0,0 에서 n,n 까지 올바르게 가게하기 위해 화살표를 바꿔야하는 총비용

const grid = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [1, 1, 1, 1],
  [2, 2, 2, 2],
];
// Output: 3
// Explanation: You will start at point (0, 0).
//     The path to (3, 3) is as follows. (0, 0) --> (0, 1) --> (0, 2) --> (0, 3) change the arrow to down with cost = 1 --> (1, 3) --> (1, 2) --> (1, 1) --> (1, 0) change the arrow to down with cost = 1 --> (2, 0) --> (2, 1) --> (2, 2) --> (2, 3) change the arrow to down with cost = 1 --> (3, 3)
//     The total cost = 3.

// 오른쪽 1, 왼쪽 2, 아래 3, 위 4
// 화살표 대로 전진! 길이 막히면 바꿈 비용 +1
// bfs 에서 모든 방향 갈기기로 플어 보자
var minCost = function (grid) {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const m = grid.length;
  const n = grid[0].length;

  // 비용이 얼마까지 들었는지 기록하고, 비용이 넘어서서 도달한 친구는 도태시켜주자
  const payGrid = Array.from({ length: m }, () => new Array(n).fill(Infinity));
  const deque = [[0, 0, 0]];
  payGrid[0][0] = 0;

  while (deque.length) {
    const [y, x, pay] = deque.shift();

    if (pay > payGrid[y][x]) continue;

    for (let i = 0; i < directions.length; i++) {
      const [dy, dx] = directions[i];
      const ny = dy + y;
      const nx = dx + x;

      if (ny < 0 || nx < 0 || ny >= m || nx >= n) continue;
      const newPay = grid[y][x] - 1 === i ? pay : pay + 1;

      if (newPay < payGrid[ny][nx]) {
        payGrid[ny][nx] = newPay;
        if (grid[y][x] - 1 === i) deque.unshift([ny, nx, newPay]);
        else deque.push([ny, nx, newPay]);
      }
    }
  }

  return payGrid[m - 1][n - 1];
};

console.log(minCost(grid));
