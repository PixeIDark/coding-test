// 터진 인형 개수

const y = 2,
  board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  moves = [1, 5, 3, 5, 1, 2, 1, 4];
// OutPut: 4
// [4, 3, 1, 1, 3,

function solution(board, moves) {
  // 로우 move+1로 고정 시키고 컬럼만 올림
  // 모든 컬이 0인 로우는 "폐급"으로 첫번쨰 요소를 변경하고 이 후 탐색 못하게 막음. 1

  const arr = [];
  let result = 0;

  for (const row of moves) {
    for (let col = 0; col < board.length; col++) {
      if (!board[col][row - 1]) continue;
      if (board[col][row - 1] === "폐급") break;

      if (board[col][row - 1] === arr[arr.length - 1]) {
        arr.pop();
        result += 2;
        board[col][row - 1] = 0;
        break;
      }
      if (board[col][row - 1]) {
        arr.push(board[col][row - 1]);
        board[col][row - 1] = 0;
        break;
      }

      if (col === board.length - 1 && board[col][row - 1])
        board[0][row - 1] = "폐급";
    }
  }
  return result;
}

console.log(solution(board, moves));
