// 육지값 대신에 보물과의 가장 가까운 거리 넣어라.

const grid = [
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
];

// Output: [
//   [3,-1,0,1],
//   [2,2,1,-1],
//   [1,-1,2,-1],
//   [0,-1,3,4]
// ]

// 0 = 보물, -1 = 물(못 건넘)
// 가장 가까운 값을 반환받고 채워야함.
// 탐색한 곳을 공간하나 더써서 표시해두자.
var islandsAndTreasure = function (grid) {
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const INF = 2147483647;
  let treasures = [];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === 0) treasures.push([y, x]);
    }
  }

  while (treasures.length > 0) {
    const [y, x] = treasures.shift();

    for (const [dy, dx] of direction) {
      const newY = y + dy;
      const newX = x + dx;

      if (
        newY >= 0 &&
        newY < grid.length &&
        newX >= 0 &&
        newX < grid[0].length &&
        grid[newY][newX] === INF
      ) {
        treasures.push([newY, newX]);
        grid[newY][newX] = grid[y][x] + 1;
      }
    }
  }

  return grid;
};

console.log(islandsAndTreasure(grid));
