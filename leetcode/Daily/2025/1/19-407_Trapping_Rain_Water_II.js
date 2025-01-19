// 물 웅덩이 너비 계산

const heightMap = [
  [1, 4, 3, 1, 3, 2],
  [3, 2, 1, 3, 2, 4],
  [2, 3, 3, 2, 3, 1],
];
// Output: 4
// Explanation: After the rain, water is trapped between the blocks.
//     We have two small ponds 1 and 3 units trapped.
//     The total volume of water trapped is 4.

// m-1, n-1, 0, 0 인덱스 들은 무시해야함 어차피 물이 세버림.
// 벽느낌..
var trapRainWater = function (heightMap) {
  const m = heightMap.length;
  const n = heightMap[0].length;
  if (m <= 2 || n <= 2) return 0;

  const vis = Array.from({ length: m }, () => new Array(n).fill(0));
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let result = 0;

  // 높이가 큰쪽으로는 못가는게 일단 맞음
  // 외벽의 높이 최소값 보다 다음 위치의 높이가
  const bt = (y, x, width) => {
    if (vis[y][x]) return;
    vis[y][x] = 1;
  };

  for (let y = 1; y < m - 1; y++) {
    for (let x = 1; x < n - 1; x++) {}
  }
};
