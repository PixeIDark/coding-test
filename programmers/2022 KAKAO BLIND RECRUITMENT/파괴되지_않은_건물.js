// 적의 공격에서 살아남은 건물 수 출력

const p = 1,
  board = [
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
  ];
skill = [
  [1, 0, 0, 3, 4, 4],
  [1, 2, 0, 2, 3, 2],
  [2, 1, 0, 3, 1, 2],
  [1, 0, 1, 3, 3, 1],
];
// OutPut: 10
// skill의 각 행은 [type, r1, c1, r2, c2, degree]형태를 가지고 있습니다
// 0 이하가 되면 파괴된거임.

// 무슨 방법이든 skill 을 순회하긴 해야함.
// [0][0] ~ [4][4] : [1][1] ~ [3][3]

function solution(board, skill) {
  const m = board.length;
  const n = board[0].length;
  const clone = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let [type, y1, x1, y2, x2, value] of skill) {
    value = type === 1 ? value * -1 : value;

    clone[y1][x1] += value;
    clone[y1][x2 + 1] -= value;
    clone[y2 + 1][x1] -= value;
    clone[y2 + 1][x2 + 1] += value;
  }

  for (let y = 0; y < m; y++) {
    for (let x = 1; x < n; x++) {
      clone[y][x] += clone[y][x - 1];
    }
  }

  for (let y = 0; y < n; y++) {
    for (let x = 1; x < m; x++) {
      clone[x][y] += clone[x - 1][y];
    }
  }

  let count = 0;
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      board[y][x] += clone[y][x];
      if (board[y][x] > 0) count++;
    }
  }

  return count;
}

console.log(solution(board, skill));
