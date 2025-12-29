// word를 모두 set에 길이별로 저장
// dfs로 각 set을 참조 후 가능하면 계속 진행
// word를 trie로 정리
// 37분
var findWords = function (board, words) {
  const n = board.length;
  const m = board[0].length;
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let root = {};

  for (const word of words) {
    let node = root;

    for (const char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }

    node.word = word;
  }

  const result = [];

  const dfs = (y, x, node) => {
    const char = board[y][x];
    const next = node[char];

    if (!next) return;

    if (next.word) {
      result.push(next.word);
      next.word = null;
    }

    board[y][x] = "#";

    for (const [dy, dx] of dirs) {
      const ny = dy + y;
      const nx = dx + x;
      if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      if (board[ny][nx] === "#") continue;

      dfs(ny, nx, next);
    }

    board[y][x] = char;
  };

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      dfs(y, x, root);
    }
  }

  return result;
};