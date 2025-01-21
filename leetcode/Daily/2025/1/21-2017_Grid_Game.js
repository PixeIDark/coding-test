// 두 번쨔 움직여서 최대의 점수얻기

const grid = [
  [1, 3, 1, 15],
  [1, 3, 3, 1],
];
// Output: 4
// Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
//     The cells visited by the first robot are set to 0.
// The second robot will collect 0 + 0 + 4 + 0 = 4 points.

// grid[0] i 부터의 값이 크냐
// grid[1] i 까지의 값이 크냐
// 첫번째로 로봇은 저 둘중 하나의 최대 값이 작게 만드는 쪽으로 움직일꺼임.
var gridGame = function (grid) {
  const n = grid[0].length;

  const dp1 = Array(n + 1).fill(0);
  const dp2 = Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    dp1[i] = grid[0][i] + dp1[i + 1];
  }

  for (let i = 0; i < n; i++) {
    dp2[i + 1] = grid[1][i] + dp2[i];
  }

  let result = Infinity;

  for (let i = 0; i < n; i++) {
    result = Math.min(result, Math.max(dp1[i + 1], dp2[i]));
  }

  return result;
};

console.log(gridGame(grid));

// var gridGame = function (grid) {
//     const m = grid.length;
//     const n = grid[0].length;
//
//     // 끝 요소의 [0][1]을 반환 [0]은 최대값 [1]는 꺽는 인덱스
//
//     const run = () => {
//         const dp1 = Array(n).fill(0);
//         const dp2 = Array.from({ length: n }, () => []);
//         dp1[0] = grid[0][0];
//         dp2[0].push(grid[1][0] + dp1[0]);
//         dp2[0].push(0);
//
//         for (let i = 1; i < n; i++) {
//             const num = grid[0][i];
//             dp1[i] = dp1[i - 1] + num;
//         }
//
//         for (let i = 1; i < n; i++) {
//             const num = grid[1][i];
//
//             if (dp2[i - 1][0] > dp1[i]) {
//                 dp2[i][0] = dp2[i - 1][0] + num;
//                 dp2[i][1] = dp2[i - 1][1];
//             } else {
//                 dp2[i][0] = dp1[i] + num;
//                 dp2[i][1] = i;
//             }
//         }
//         return dp2[n - 1];
//     };
//
//     // dp2 [0] 이 최대값 [1] 이 꺽은 인덱스
//     // 꺽은 인덱스 까지의 grid[0] 은 0 으로 처리, 꺽은 인덱스 부터의 grid[1] 부터 0으로 처리
//     const k = run()[1];
//
//     for (let i = 0; i <= k; i++) {
//         grid[0][i] = 0;
//     }
//
//     for (let i = k; i < n; i++) {
//         grid[1][i] = 0;
//     }
//
//     console.log(grid);
//
//     return run()[0];
// };
