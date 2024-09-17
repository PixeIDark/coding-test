// 스도쿠 true false 마음꺽여서 포기함 ㅋ

const board1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]; // true

const board2 = [
  ["8", "3", ".", ".", "7", ".", "7", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]; // false

// 가로, 세로, 박스들을 각 각 검증하는 변수를 선언해
// 무엇을 기준으로 검증하냐?
// 가로는 00 01 02 03 04.. 세로는 00 10 20 30 40.. 서로 바뀌면 되겠지? 검증 시
// 박스는 00 ~ 02 10 ~ 12 20 ~ 22 어카냐
var isValidSudoku = function (board) {
  for (let l = 0; l < board.length; l++) {
    let row1 = new Set();
    let row2 = [];

    let col1 = new Set();
    let col2 = [];

    let square1 = new Set();
    let square2 = [];

    for (let r = 0; r < board.length; r++) {
      if (board[l][r] === ".") continue;
      row1.add(board[l][r]);
      row2.push(board[l][r]);

      if (board[r][l] === ".") continue;
      col1.add(board[r][l]);
      col2.push(board[r][l]);

      board[l][r];
    }
  }
};
// const board2 = [
//   ["8", "3", ".", ".", "7", ".", "7", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];
console.log(isValidSudoku(board2));