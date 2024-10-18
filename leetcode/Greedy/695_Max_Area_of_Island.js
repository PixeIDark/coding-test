// 최대 섬 크기 구하기

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

// dt갈겨라 걍
// 탐색한 곳 0으로 만들고, size++ dt끝나고 for문 돌기시작하면 size는 초기화
var maxAreaOfIsland = function (grid) {
  let max = 0;
  let size = 0;

  const dt = (y, x) => {
    if (
      y < 0 ||
      x < 0 ||
      y >= grid.length ||
      x >= grid[0].length ||
      grid[y][x] === 0
    )
      return;

    grid[y][x] = 0;
    size++;

    const direction = [
      [y + 1, x],
      [y - 1, x],
      [y, x + 1],
      [y, x - 1],
    ];

    for (const [dy, dx] of direction) {
      dt(dy, dx);
    }
  };

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === 0) continue;
      dt(y, x);
      max = Math.max(max, size);
      size = 0;
    }
  }
  return max;
};

console.log(maxAreaOfIsland(grid));
