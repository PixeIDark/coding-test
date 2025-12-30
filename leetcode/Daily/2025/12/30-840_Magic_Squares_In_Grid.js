// 행 열 대각선이 모두 같은 3 * 3 마방진이 총 몇 개인지 반환
// y = 1 ~ n - 2, x = 1 ~ m -2
// [y][x]는 중앙이니까 기준으로 마방진인지 검증
// 21분, 쓰레기문제
var numMagicSquaresInside = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const sum = 15;
  let result = 0;

  for (let y = 1; y < n - 1; y++) {
    for (let x = 1; x < m - 1; x++) {
      const squares = [grid[y - 1][x - 1], grid[y - 1][x], grid[y - 1][x + 1], grid[y][x - 1], grid[y][x], grid[y][x + 1], grid[y + 1][x - 1], grid[y + 1][x], grid[y + 1][x + 1]];
      if (new Set(squares).size !== 9) continue;

      if (squares.some(square => square > 9 || square < 1)) continue;

      const [a, b, c, d, e, f, g, h, i] = squares;
      const nums = [a + b + c, d + e + f, g + h + i, a + d + g, b + e + h, c + f + i, a + e + i, c + e + g];

      if (nums.every(num => num === sum)) result++;
    }
  }

  return result;
};