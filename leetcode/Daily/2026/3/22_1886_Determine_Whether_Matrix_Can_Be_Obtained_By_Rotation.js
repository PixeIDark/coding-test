// mat 을 90, 180, 270, 360도 회전시켜서 target과 같은지 반환
// 1. mat과 target은 길이가 같음. 1개수 체크 => total
// 2. [total, total, total, total] 각 각도를 저장하고 일치할때마다 해당하는 요소를 1씩감소
// 3. 0되는 요소가 하나라도 존재하면 true
// 28분
var findRotation = function (mat, target) {
  if (mat.filter(x => x === 1).length !== target.filter(x => x === 1).length) return false;

  const n = mat.length;
  const m = mat[0].length;
  const arr = Array(4).fill(n * m);

  // 1 0 1 0 1  1 0 1 0 1  1 1 1 1 1  0 0 0 0 1
  // 0 0 0 0 0  1 0 0 0 0  1 0 1 0 1  0 0 0 0 1
  // 1 0 1 0 1  1 0 1 0 1             0 0 0 0 1
  // 0 0 0 0 0  1 0 0 0 0             0 0 0 0 1
  // 1 1 1 1 1  1 0 1 0 1             0 0 0 0 1

  // [4][0] => [0][0]
  // [4][1] => [1][0]
  // [4][2] => [2][0]
  // [4][3] => [3][0]
  // [4][4] => [4][0]
  // 90 = [y][x] => [x][n - 1 - y]
  // 180 = [y][x] => [n - 1 - y][m - 1 - x] 좌우반전 되야함
  // 270 = [y][x] => [m - 1 - x][y]
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (mat[y][x] === target[y][x]) arr[0]--;
      if (mat[y][x] === target[x][n - 1 - y]) arr[1]--;
      if (mat[y][x] === target[n - 1 - y][m - 1 - x]) arr[2]--;
      if (mat[y][x] === target[m - 1 - x][y]) arr[3]--;
    }
  }
  // 걍 배열 요소 불리언이 훨씬 나았을듯

  return arr.some(x => x === 0);
};