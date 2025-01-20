// 색칠 시작해서 가장 빨리 행이나 열 가득 채우는 인덱스 출력

const arr = [1, 4, 5, 2, 6, 3],
  mat = [
    [4, 3, 5],
    [1, 2, 6],
  ];
// Output: 3
// Explanation: The second column becomes fully painted at arr[3].

// {row1, row2, col1, col2,} 객체로 저장하고 색칠되면 해당하는 얘들 ++해줘
// 만약 row는 n col은 m에 달하면 종료 후 인덱스 반환
// arr 에 해당 번호에 해당하는 위치를 미리 넣어야해 mat 기준으로 순회 하면서
// y = row x = col
var firstCompleteIndex = function (arr, mat) {
  const m = mat.length;
  const n = mat[0].length;

  const rows = Array(m).fill(0);
  const cols = Array(n).fill(0);

  const orders = Array.from({ length: arr.length }, () => []);
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      const arrIdx = mat[y][x];
      orders[arrIdx] = [y, x];
    }
  }
  // [ [ 1, 0 ], [ 0, 0 ], [ 0, 2 ], [ 1, 1 ], [ 1, 2 ], [ 0, 1 ] ]

  for (let i = 0; i < orders.length; i++) {
    const [y, x] = orders[arr[i]];

    rows[y]++;
    if (rows[y] === n) return i;

    cols[x]++;
    if (cols[x] === m) return i;
  }

  return 0;
};

console.log(firstCompleteIndex(arr, mat));
