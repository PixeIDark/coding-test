// 가장 큰 세개의 마름모 내림차순 배열로 합 반환
// 그리드의 한지점을 중앙으로 해서 마름모를 만들기
// 서로 다른 값이 세 개 미만인 경우, 모든 값을 반환합니다. <= 각 합이 고유해야함
// 30분
var getBiggestThree = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const set = new Set();

  for (let y = 0; y < n; y++) {

    for (let x = 0; x < m; x++) {

      let i = 1;
      set.add(grid[y][x]);

      while (y + i < n && y - i >= 0 && x + i < m && x - i >= 0) {
        let sum = 0;
        let r = y - i;
        let c = x;

        for (let j = 0; j < i; j++) {
          sum += grid[r + j][c + j];
        }

        r = y;
        c = x + i;

        for (let j = 0; j < i; j++) {
          sum += grid[r + j][c - j];
        }

        r = y + i;
        c = x;

        for (let j = 0; j < i; j++) {
          sum += grid[r - j][c - j];
        }

        r = y;
        c = x - i;

        for (let j = 0; j < i; j++) {
          sum += grid[r - j][c + j];
        }

        i++;
        set.add(sum);
      }
    }
  }

  const arr = [...set.values()];

  return arr.sort((a, b) => b - a).slice(0, 3);
};