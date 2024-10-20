// 섬개수 찾기, 1이 육지임.

const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
// Output: 3

// dt갈겨라 1 탐색했으면 0으로 바꿔버리면됨.
var numIslands = function (grid) {
  let result = 0;
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dt = (y, x) => {
    if (grid[y][x] !== "1") return;
    grid[y][x] = "0";

    for (const [dy, dx] of direction) {
      const newY = dy + y;
      const newX = dx + x;

      if (
        newY >= 0 &&
        newY < grid.length &&
        newX >= 0 &&
        newX < grid[0].length &&
        grid[newY][newX] === "1"
      ) {
        dt(newY, newX);
      }
    }
  };

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "0") continue;
      dt(y, x);
      result++;
    }
  }

  return result;
};

console.log(numIslands(grid));
