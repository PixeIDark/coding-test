// 투 포인트로 서로 위치 교환하기
// 0 <=> n - 1, 1 <=> n - 2 col은 같게
// 12분
var reverseSubmatrix = function (grid, x, y, k) {
  // y + k - 1, x + k - 1
  // y부터

  for (let top = x, bottom = x + k - 1; top < bottom; top++, bottom--) {
    for (let i = y; i < y + k; i++) {
      [grid[top][i], grid[bottom][i]] = [grid[bottom][i], grid[top][i]];
    }
  }

  return grid;
};