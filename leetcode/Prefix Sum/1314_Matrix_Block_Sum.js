// 1. 2d prefix 만들기
// 2. k 만큼 영역을 합하기
// 33분
var matrixBlockSum = function (mat, k) {
  const n = mat.length;
  const m = mat[0].length;
  const prefix = Array.from({length: n + 1}, () => Array(m + 1).fill(0));

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      prefix[i][j] = mat[i - 1][j - 1] - prefix[i - 1][j - 1] + prefix[i - 1][j] + prefix[i][j - 1];
    }
  }

  const getSum = (x1, y1, x2, y2) => {
    x1 = Math.max(0, x1);
    y1 = Math.max(0, y1);
    x2 = Math.min(n - 1, x2);
    y2 = Math.min(m - 1, y2);

    return prefix[x2 + 1][y2 + 1] - prefix[x2 + 1][y1] - prefix[x1][y2 + 1] + prefix[x1][y1];
  };

  const result = [];

  for (let i = 0; i < n; i++) {
    const row = [];

    for (let j = 0; j < m; j++) {
      const a = getSum(i - k, j - k, i + k, j + k);
      row.push(a);
    }

    result.push(row);
  }

  return result;
};