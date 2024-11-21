// 경비원 눈길 피하는 셀 몇개인지

const m = 4,
  n = 6,
  guards = [
    [0, 0],
    [1, 1],
    [2, 3],
  ],
  walls = [
    [0, 1],
    [2, 2],
    [1, 4],
  ];
// Output: 7
// Explanation: The guarded and unguarded cells are shown in red and green respectively in the above diagram.
//     There are a total of 7 unguarded cells, so we return 7.

var countUnguarded = function (m, n, guards, walls) {
  let result = m * n - guards.length - walls.length;
  const board = Array.from({ length: m }, () => new Array(n).fill(0));

  for (const [y, x] of guards) {
    board[y][x] = "g";
  }

  for (const [y, x] of walls) {
    board[y][x] = "w";
  }

  const bt = (y, x, pattern) => {
    if (y >= m || y < 0 || x >= n || x < 0 || board[y][x] === "w") return;
    if (board[y][x] === "g") {
      board[y][x] = 1;
      pattern = "first";
    }
    if (board[y][x] === 0) {
      board[y][x] = 1;
      result--;
    }

    if (pattern === "first") {
      bt(y, x - 1, "left");
      bt(y, x + 1, "right");
      bt(y - 1, x, "bottom");
      bt(y + 1, x, "top");
    }

    if (pattern === "left") bt(y, x - 1, "left");
    if (pattern === "right") bt(y, x + 1, "right");
    if (pattern === "bottom") bt(y - 1, x, "bottom");
    if (pattern === "top") bt(y + 1, x, "top");
  };

  for (const [y, x] of guards) {
    if (board[y][x] === "g") bt(y, x);
  }

  return result;
};

// var countUnguarded  = function(m, n, guards, walls) {
//     const board = Array.from({ length: m }, () => new Array(n).fill(0));
//     let unguarded = m * n - guards.length - walls.length;
//
//     // 경비원과 벽 설치
//     for (const [y, x] of guards) board[y][x] = 'G';
//     for (const [y, x] of walls) board[y][x] = 'W';
//
//     // 각 방향별로 감시 구역 표시하는 함수
//     const markLine = (y, x, dy, dx) => {
//         y += dy;
//         x += dx;
//
//         // 경계 안에 있고 벽이나 경비원이 아닐 때까지 진행
//         while (
//             y >= 0 && y < m &&
//             x >= 0 && x < n &&
//             board[y][x] !== 'W' &&
//             board[y][x] !== 'G'
//             ) {
//             if (board[y][x] === 0) {
//                 board[y][x] = 1;
//                 unguarded--;
//             }
//             y += dy;
//             x += dx;
//         }
//     };
//
//     // 각 경비원마다 4방향 처리
//     for (const [y, x] of guards) {
//         markLine(y, x, -1, 0);  // 위
//         markLine(y, x, 1, 0);   // 아래
//         markLine(y, x, 0, -1);  // 왼쪽
//         markLine(y, x, 0, 1);   // 오른쪽
//     }
//
//     return unguarded;
// };

console.log(countUnguarded(m, n, guards, walls));
