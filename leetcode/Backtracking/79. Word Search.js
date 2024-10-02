// 단어 검색
const board = [
  ["a", "b"],
  ["c", "d"],
];
word = "abcd";
// Output: true

// [][k]가 마지막 length면 다음 단계로 넘어가라.
// 찾을때마다 word는 줄어들게.
// if문으로 남은 배열의 길이가 word보다 짧으면 컷 바로 false!
var exist = function (board, word) {
  const arr = word.split("");

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const index = arr.indexOf(board[i][j]);
      if (index !== -1) arr.splice(index, 1);
    }
  }
  return arr.length === 0 ? true : false;
};

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 1);
// console.log(arr);
// [ 1, 2, 3, 5 ]

console.log(exist(board, word));

var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // 상하좌우 이동하게해줌

  function dfs(i, j, k) {
    if (k === word.length) return true;
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k])
      return false;

    const temp = board[i][j];
    board[i][j] = "#"; // 방문 표시

    for (const [dx, dy] of dirs) {
      if (dfs(i + dx, j + dy, k + 1)) return true;
    }

    board[i][j] = temp; // 원래 상태로 복구
    return false;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
};
