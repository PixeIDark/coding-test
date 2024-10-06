// 퀸이 서로 공격할 수 없는 위치 최대한 많이

const n = 4;
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

/**
 * @param {number} n
 * @return {string[][]}
 */

// 퀸의 공격 조건: 대각선, 위 아래 옆 무제한 길이로함
// 서로의 x, y축의 차가 같으면 대각선, 하나라도 같은 축이면 위 아래 옆
// 1. if문을 이용해 조건에 맞게 리턴 해줌. 요소 하나하나에
// 2. 요소의 길이가 4가 되면 멈춤.
// 3. 되돌아가야함 q찍었을 때 전과 비교해보고.
const isValid = (row, col, board) => {
  for (let i = 0; i < row; i++) {
    if (board[i] === col || Math.abs(board[i] - col) === Math.abs(row - i))
      return false;
  }
  return true;
};

var solveNQueens = function (n) {
  let result = [];
  const bt = (row, board) => {
    if (row === n) {
      result.push(
        board.map((col) => {
          return ".".repeat(col) + "Q" + ".".repeat(n - col - 1);
        })
      );
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col, board)) {
        board[row] = col;
        bt(row + 1, board);
      }
    }
  };

  bt(0, []);
  return result;
};

console.log(solveNQueens(4));
