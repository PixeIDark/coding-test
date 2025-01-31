// 섬 면적 구하기. 0 => 1 하나 바꿔서

const grid = [
  [1, 0, 0, 1, 1],
  [1, 0, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 1, 0],
];
// Output: 3
// Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.

// grid의 인덱스 끼리 연결을 봐야한다.
// 인덱스 끼리 연결하면 최소 1 가중치 얻고, 인덱스 안에서 1 투자하면 1만 얻음. 모든 grid가 연결된거 아니면 걍 연결시키는게 나음
// 순회 하면서 y-1 의 x와 현재x 를 비교 둘 다 1이면 이어진 거임.
// 구획을 묶어서 개수를 배열에 푸시
// 인접한 구획 이면 합칠수 있음. 출력은 인접한 구획과의 최대 합 + 1
// 0이 두번 이상이면 islands에 0 푸시해서 벽만들어야함
var largestIsland = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const vis = Array.from({ length: m }, () => Array(n).fill(0));
  const dir = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];
  // 0 만나도 한번은 생환 가능.
  let isChance = true;

  const dfs = (y, x) => {
    if (vis[y][x]) return 0;
    vis[y][x] = 1;

    if (!grid[y][x] && !isChance) return 0;
    if (!grid[y][x]) isChance = false;

    let landCount = 1;

    for (const [dy, dx] of dir) {
      const ny = dy + y;
      const nx = dx + x;

      if (ny >= 0 && nx >= 0 && ny < m && nx < n)
        landCount += dfs(ny, nx, isChance);
    }
    return landCount;
  };

  let result = 1;
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (vis[y][x] || !grid[y][x]) continue;
      const islands = dfs(y, x);
      result = Math.max(result, islands);
      isChance = true;
    }
  }

  return result;
};

console.log(largestIsland(grid));
