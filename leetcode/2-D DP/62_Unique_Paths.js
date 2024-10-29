// 왼쪽 끝 맨 밑까지 이동할 수 있는 경우의 수

const m = 3,
  n = 7;
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// m = 세로 n = 가로, 오른쪽이나 아래로만 이동 가능하다
// grid만들고 이동한 지점을 표시해주는 시긍로 해보자
// 이동한 위치까지의 경우의 수를 합쳐나가는 식으로해야함.
var uniquePaths = function (m, n) {
  const grid = Array.from({ length: m }, () => new Array(n).fill(1));

  for (let y = 1; y < m; y++) {
    for (let x = 1; x < n; x++) {
      grid[y][x] = grid[y - 1][x] + grid[y][x - 1];
    }
  }
  return grid;
};

console.table(uniquePaths(m, n));
