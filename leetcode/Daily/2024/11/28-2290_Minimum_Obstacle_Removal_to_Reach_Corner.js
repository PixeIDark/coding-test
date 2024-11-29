// 0,0 에서 마지막까지 벽 몇개 허물어야 갈수 있는지 최소 허물기 수

const grid = [
  [0, 1, 1],
  [1, 1, 0],
  [1, 1, 0],
];
// Output: 2
// Explanation: We can remove the obstacles at (0, 1) and (0, 2) to create a path from (0, 0) to (2, 2).
//     It can be shown that we need to remove at least 2 obstacles, so we return 2.
// Note that there may be other ways to remove 2 obstacles to create a path.

// 어느 시점으로 돌아가서 어떤 벽들을 제거 해야할까?
var minimumObstacles = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const vis = Array.from({ length: m }, () => new Array(n).fill(Infinity));
  vis[0][0] = 0;

  const direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const deque = [[0, 0, 0]];

  while (deque.length) {
    const [obstacles, x, y] = deque.shift();

    if (obstacles > vis[x][y]) continue;

    if (x === m - 1 && y === n - 1) return obstacles;

    for (const [dx, dy] of direction) {
      const newX = dx + x;
      const newY = dy + y;

      if (newX >= 0 && newY >= 0 && newX < m && newY < n) {
        const newObstacles = obstacles + grid[newX][newY];

        if (newObstacles < vis[newX][newY]) {
          vis[newX][newY] = newObstacles;

          if (grid[newX][newY] === 1) {
            deque.push([newObstacles, newX, newY]);
          } else {
            deque.unshift([newObstacles, newX, newY]);
          }
        }
      }
    }
  }

  return -1;
};

console.log(minimumObstacles(grid));
