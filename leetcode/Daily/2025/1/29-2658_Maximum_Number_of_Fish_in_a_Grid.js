// 물 그리드에서 만 움직이면서 최대한 물고기 많이 잡기

const grid = [
  [0, 2, 1, 0],
  [4, 0, 0, 3],
  [1, 0, 0, 4],
  [0, 3, 2, 0],
];
// Output: 7
// Explanation: The fisher can start at cell (1,3) and collect 3 fish, then move to cell (2,3) and collect 4 fish.

// 0은 육지 1 <= 물
var findMaxFish = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const vis = Array.from({ length: m }, () => Array(n).fill(0));
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dfs = (y, x) => {
    if (vis[y][x]) return 0;

    vis[y][x] = 1;

    let fishes = grid[y][x];

    for (const [dy, dx] of dir) {
      const ny = dy + y;
      const nx = dx + x;

      if (
        ny >= 0 &&
        nx >= 0 &&
        ny < m &&
        nx < n &&
        grid[ny][nx] &&
        !vis[ny][nx]
      )
        fishes += dfs(ny, nx);
    }

    return fishes;
  };

  let result = 0;

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (vis[y][x] || !grid[y][x]) continue;
      result = Math.max(result, dfs(y, x));
    }
  }

  return result;
};

console.log(findMaxFish(grid));
