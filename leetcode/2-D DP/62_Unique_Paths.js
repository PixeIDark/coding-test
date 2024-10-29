// 왼쪽 끝 맨 밑까지 이동할 수 있는 경우의 수

const m = 3,
  n = 2;
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// m = 세로 n = 가로, 오른쪽이나 아래로만 이동 가능하다
// grid만들고 이동한 지점을 표시해주는 시긍로 해보자
// 이동한 위치까지의 경우의 수를 합쳐나가는 식으로해야함.
var uniquePaths = function (m, n) {
  // 방문 판독셔틀
  const grid = Array.from({ length: m }, () => new Array(n).fill(0));

  // 경로까지의 경우의 수
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  dp[0][0] = 1;

  const bt = (y, x) => {
    if (grid[y][x]) return;

    grid[y][x] = 1;
  };
  bt(0, 0);

  return grid;
};

console.log(uniquePaths(m, n));
