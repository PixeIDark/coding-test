// 섬 면적 구하기. 0 => 1 하나 바꿔서

const grid = [
  [1, 0, 1],
  [0, 0, 0],
  [0, 1, 1],
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
  const dir = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];
  const vis = Array.from({ length: m }, () => Array(n).fill(0));
  let landCount = 0;
  let isPerfect = true;
  // 0 은 전역 vis 에서도 밴 해 버리자.
  const dfs = (y, x, z) => {
    if (vis[y][x]) return;
    vis[y][x] = 1;

    if (!grid[y][x] && !z) {
      return;
    }
    if (!grid[y][x]) {
      z = false;
      isPerfect = false;
    } else landCount++;

    for (const [dy, dx] of dir) {
      const ny = dy + y;
      const nx = dx + x;

      if (ny >= 0 && nx >= 0 && ny < m && nx < n) dfs(ny, nx, z);
    }
  };

  let result = 1;
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (!grid[y][x] || vis[y][x]) continue;
      dfs(y, x, true);
      console.log(y, x);
      if (!isPerfect) landCount++;
      result = Math.max(result, landCount);
      landCount = 0;
      isPerfect = true;
    }
  }

  return result;
};

console.log(largestIsland(grid));
