// 태평양 = 서+북, 대서양 = 동+남 빗물이 양쪽으로 흐를수 있는 위치들을 반환
// 빗물은 이웃 빗물이 작거나 같으면 흐를 수 있음.

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
// [0,4]: [0,4] -> Pacific Ocean
//        [0,4] -> Atlantic Ocean
// [1,3]: [1,3] -> [0,3] -> Pacific Ocean
//        [1,3] -> [1,4] -> Atlantic Ocean
// [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean
//        [1,4] -> Atlantic Ocean
// [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean
//        [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
// [3,0]: [3,0] -> Pacific Ocean
//        [3,0] -> [4,0] -> Atlantic Ocean
// [3,1]: [3,1] -> [3,0] -> Pacific Ocean
//        [3,1] -> [4,1] -> Atlantic Ocean
// [4,0]: [4,0] -> Pacific Ocean
//        [4,0] -> Atlantic Ocean
// Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.

// [0, x] || [x, 0] && [max, y] || [y, max] 이거임 다으면 세이프
// 위 조건에 따라 dfs하고 배열로 넣어라.
var pacificAtlantic = function (heights) {
  const result = [];
  const m = heights.length;
  const n = heights[0].length;
  const 태평양 = Array.from({ length: m }, () => new Array(n).fill(0));
  const 대서양 = Array.from({ length: m }, () => new Array(n).fill(0));
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const bt = (y, x, sea) => {
    sea[y][x] = 1;

    for (const [dy, dx] of direction) {
      const ny = y + dy;
      const nx = x + dx;

      if (
        ny >= 0 &&
        ny < m &&
        nx >= 0 &&
        nx < n &&
        !sea[ny][nx] &&
        heights[y][x] <= heights[ny][nx]
      )
        bt(ny, nx, sea);
    }
  };

  for (let y = 0; y < m; y++) {
    bt(y, 0, 태평양);
  }
  for (let x = 0; x < n; x++) {
    bt(0, x, 태평양);
  }
  for (let y = 0; y < m; y++) {
    bt(y, n - 1, 대서양);
  }
  for (let x = 0; x < n; x++) {
    bt(m - 1, x, 대서양);
  }
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (태평양[y][x] && 대서양[y][x]) result.push([y, x]);
    }
  }
  return result;
};

// var pacificAtlantic = function (heights) {
//   let result = [];
//   let pacific = 0;
//   let atlantic = 0;
//   const direction = [
//     [1, 0],
//     [-1, 0],
//     [0, 1],
//     [0, -1],
//   ];

//   const bt = (col, row, set) => {
//     if (set.has(`${col}, ${row}`)) return;
//     if (col === 0 || row === 0) pacific++;
//     if (col === heights.length - 1 || row === heights[0].length - 1) atlantic++;

//     set.add(`${col}, ${row}`);

//     for (const [dy, dx] of direction) {
//       const nextCol = col + dy;
//       const nextRow = row + dx;

//       if (
//         nextCol >= 0 &&
//         nextCol < heights.length &&
//         nextRow >= 0 &&
//         nextRow < heights[0].length &&
//         heights[nextCol][nextRow] <= heights[col][row]
//       ) {
//         bt(nextCol, nextRow, set);
//       }
//     }
//   };

//   for (let y = 0; y < heights.length; y++) {
//     for (let x = 0; x < heights[0].length; x++) {
//       let set = new Set();
//       bt(y, x, set);
//       if (pacific && atlantic) result.push([y, x]);
//       pacific = 0;
//       atlantic = 0;
//     }
//   }
//   return result;
// };

console.log(pacificAtlantic(heights));
