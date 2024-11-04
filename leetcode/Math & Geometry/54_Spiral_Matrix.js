// 나선환 모양으로 순서 출력

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
];
// Output: [1,2,3,4,8,12,16,20,24,23,22,21,17,1 3, 9, 5, 6,7,11,15,19,18,14,10 ]

// 기적의 bfs로 ㄱㄱ
// 기본적으로 오른쪽으로 쭉달리고 막히면 아래로 이동
// 아래로 이동쭉 하다가 막히면 왼쪽으로 이동 막히면 위로 이동
// 다시 오르쪽
var spiralOrder = function (matrix) {
  const arr = [];
  let pattern = "우";

  const bfs = (y, x) => {
    arr.push(matrix[y][x]);
    matrix[y][x] = "a";

    if (
      pattern === "우" &&
      (x + 1 === matrix[0].length || matrix[y][x + 1] === "a")
    )
      pattern = "아래";
    if (
      pattern === "아래" &&
      (y + 1 === matrix.length || matrix[y + 1][x] === "a")
    )
      pattern = "좌";
    if (pattern === "좌" && (x - 1 === -1 || matrix[y][x - 1] === "a"))
      pattern = "위";
    if (pattern === "위" && (y - 1 === -1 || matrix[y - 1][x] === "a"))
      pattern = "우";

    if (
      x < matrix[0].length - 1 &&
      matrix[y][x + 1] !== "a" &&
      pattern === "우"
    )
      bfs(y, x + 1);
    if (y < matrix.length - 1 && matrix[y + 1][x] !== "a" && pattern === "아래")
      bfs(y + 1, x);
    if (x > 0 && matrix[y][x - 1] !== "a" && pattern === "좌") bfs(y, x - 1);
    if (y > 0 && matrix[y - 1][x] !== "a" && pattern === "위") bfs(y - 1, x);
  };

  bfs(0, 0);

  return arr;
};

console.log(spiralOrder(matrix));
