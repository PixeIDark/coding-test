// query[0] 에서 query[1]로 드래그해서 값 1씩 증가
// 그리드 반환
// 일일이 해야하나? ㄴㄴ 일단 쿼리스 모두 순회해서 누적합 하듯이 그리드에 표시만 살짝 하는 느낌으로 ㄱㄱ
// 13분
var rangeAddQueries = function (n, queries) {
  const grid = Array.from({length: n + 2}, () => Array(n + 2).fill(0));

  // 누적합 2-d에서 어캐 해야할지 일단 브루트포스
  for (const [y1, x1, y2, x2] of queries) {
    grid[y1 + 1][x1 + 1]++;
    grid[y2 + 2][x1 + 1]--;
    grid[y1 + 1][x2 + 2]--;
    grid[y2 + 2][x2 + 2]++;
  }

  const result = Array.from({length: n}, () => Array(n).fill(0));

  for (let y = 1; y <= n; y++) {
    for (let x = 1; x <= n; x++) {
      const cow = grid[y - 1][x];
      const rol = grid[y][x - 1];
      const dia = grid[y - 1][x - 1];
      grid[y][x] += cow + rol - dia;
      result[y - 1][x - 1] = grid[y][x];
    }
  }

  return result;
};