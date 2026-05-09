// 각 테두리 2-dp를 1-dp로 평탄화
// k횟수만큼 왼쪽으로 이동
// 인덱스에 따라 2-dp로 변환
// 0,0 시작 남 - 동 - 북 - 서
// 47분
var rotateGrid = function (grid, k) {
  const n = grid.length;
  const m = grid[0].length;
  const result = Array.from({length: n}, () => Array(m).fill(0));
  const layers = Math.min(n, m) / 2;

  for (let l = 0; l < layers; l++) {
    const layerElements = [];

    for (let j = l; j < m - 1 - l; j++) layerElements.push(grid[l][j]);
    for (let i = l; i < n - 1 - l; i++) layerElements.push(grid[i][m - 1 - l]);
    for (let j = m - 1 - l; j > l; j--) layerElements.push(grid[n - 1 - l][j]);
    for (let i = n - 1 - l; i > l; i--) layerElements.push(grid[i][l]);

    const len = layerElements.length;
    const effectiveK = k % len;
    const rotated = [...layerElements.slice(effectiveK), ...layerElements.slice(0, effectiveK)];

    let idx = 0;
    for (let j = l; j < m - 1 - l; j++) result[l][j] = rotated[idx++];
    for (let i = l; i < n - 1 - l; i++) result[i][m - 1 - l] = rotated[idx++];
    for (let j = m - 1 - l; j > l; j--) result[n - 1 - l][j] = rotated[idx++];
    for (let i = n - 1 - l; i > l; i--) result[i][l] = rotated[idx++];
  }

  return result;
};