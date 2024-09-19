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
// 0# 00 01 02 10 11 12 20 21 22
// 1# 03 04 05 13 14 15 23 24 25
// 8# 66 67 68 76 77 78 86 87 88
var isValidSudoku = function (board) {
  for (let r = 0; r < board.length; r++) {
    let row = {};
    let col = {};
    let box = {};

    for (let c = 0; c < board.length; c++) {
      let boxRow = Math.floor(c / 3) + Math.floor(r / 3) * 3;
      let boxCol = (c % 3) + (r % 3) * 3;

      if (
        board[r][c] in row ||
        board[c][r] in col ||
        board[boxRow][boxCol] in box
      )
        return false;

      if (board[r][c] !== ".") row[board[r][c]] = 1;
      if (board[c][r] !== ".") col[board[c][r]] = 1;
      if (board[boxRow][boxCol] !== ".") box[board[boxRow][boxCol]] = 1;
    }
  }
  return true;
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
console.log(isValidSudoku(board1));