// 영역 전개

const board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

// 가장자리에 닿은 "O"는 살아남고 그 O와 닿는 O도 살아남음.
// 살아남을 O의 좌표를 담자 이게 더 쉽다.
// 가장자리의 O를 찾으면 탐색시작. <== 나중에 가장자리만 뒤지는 포문으로 변경하기
var solve = function (board) {
  const place = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const bt = (y, x) => {
    if (board[y][x] !== "O") return;

    board[y][x] = "A";

    for (const [dy, dx] of place) {
      if (
        y + dy >= 0 &&
        y + dy < board.length &&
        x + dx >= 0 &&
        x + dx < board[0].length
      )
        bt(y + dy, x + dx);
    }
  };

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (
        y === 0 ||
        y === board.length - 1 ||
        x === 0 ||
        x === board[0].length - 1
      )
        bt(y, x);
    }
  }
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (board[y][x] === "A") board[y][x] = "O";
      else board[y][x] = "X";
    }
  }

  return board;
};

console.log(solve(board));
