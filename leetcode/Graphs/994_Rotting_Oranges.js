// 오렌지가 모두 썩는데에 몇분 걸리는지
// 0 = 공백, 1 = 신선한 오렌지, 2 = 썩은 오렌지
// 오랜지가 모두 썩을수가 없으면 -1 반환

const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
// OutPut = 4

// 썩은 오렌지 기준 bfs 가자
// 너비 탐색에서 썩은 오렌지가 전염을 시켰을 경우 1`분 추가
var orangesRotting = function (grid) {
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let result = [];

  const bt = () => {
    let queue = [];
    let chance = 0;
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[0].length; x++) {
        if (grid[y][x] === 2) {
          queue.push([y, x]);
        } else if (grid[y][x] === 1) {
        }
      }
    }

    while (queue.length > 0) {
      const [y, x] = queue.shift();
      for (const [dy, dx] of direction) {
        const newY = y + dy;
        const newX = x + dx;

        if (
          newY < 0 ||
          newY >= grid.length ||
          newX < 0 ||
          newX >= grid[0].length
        )
          continue;

        if (grid[newY][newX] === 1) {
          grid[newY][newX] = 2;
          chance++;
        }
      }
    }
    if (!chance) return;
    result.push(1);
    bt();
  };
  bt();
  for (const arr of grid) {
    for (const n of arr) {
      if (n === 1) return -1;
    }
  }

  return result.length;
};

console.log(orangesRotting(grid));

// claude꺼 시간 복잡도 /k 더 적음
var orangesRotting = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const queue = [];
  let freshOranges = 0;
  let time = 0;

  // 방향 배열 (상, 하, 좌, 우)
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // 초기 상태 파악
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        freshOranges++;
      }
    }
  }

  // BFS 수행 존나 혁신적이네 ㅋㅋ
  while (queue.length > 0 && freshOranges > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;

        if (
          newX >= 0 &&
          newX < m &&
          newY >= 0 &&
          newY < n &&
          grid[newX][newY] === 1
        ) {
          grid[newX][newY] = 2;
          freshOranges--;
          queue.push([newX, newY]);
        }
      }
    }
    if (queue.length > 0) time++;
  }

  return freshOranges === 0 ? time : -1;
};
