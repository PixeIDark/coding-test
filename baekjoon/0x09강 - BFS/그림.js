// 그림의 개 수와 최대 너비 출력 대각선은 이어져있다는 판정 없음

const input = [
  [1, 1, 0, 1, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1],
];

// 방문한 곳 2로 바꾸기
var calculator = function (input) {
  const result = [];
  let width = 0;
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const bt = (y, x) => {
    if (input[y][x] !== 1) return;
    width++;
    input[y][x] = 2;

    for (const [dy, dx] of direction) {
      if (
        dy + y >= 0 &&
        dy + y < input.length &&
        dx + x >= 0 &&
        dx + x < input[0].length
      ) {
        bt(dy + y, dx + x);
      }
    }
  };

  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[0].length; x++) {
      if (input[y][x] !== 1) continue;
      bt(y, x, width);
      result.push(width);
      width = 0;
    }
  }

  return result.length, Math.max(...result);
};

console.log(calculator(input));
