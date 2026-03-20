// m * n 의 grid 에서 부분 행렬 k * k 의 두 요소의 최소 절대 차이를 배열로 반환
// 2차원 배열로 반환. 요소의 값이 모두 같으면 0
// 부르트포수
// 33분
var minAbsDiff = function (grid, k) {
  const n = grid.length;
  const m = grid[0].length;
  const result = Array.from({length: n - k + 1}, () => Array(m - k + 1).fill(0));

  for (let i = 0; i <= n - k; i++) {
    for (let j = 0; j <= m - k; j++) {
      const set = new Set();

      for (let y = i; y < i + k; y++) {
        for (let x = j; x < j + k; x++) {
          set.add(grid[y][x]);
        }
      }

      if (set.size === 1) continue;

      const arr = [...set];
      let min = Infinity;
      arr.sort((a, b) => a - b);

      for (let z = 1; z < arr.length; z++) {
        min = Math.min(min, Math.abs(arr[z] - arr[z - 1]));
      }

      result[i][j] = min;
    }
  }

  return result;
};