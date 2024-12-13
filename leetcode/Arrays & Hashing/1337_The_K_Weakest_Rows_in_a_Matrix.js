// 군인 수 약한 행 순으로 정렬

const mat = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
  ],
  k = 3;
// Output: [2,0,3]
// Explanation:
//     The number of soldiers in each row is:
//     - Row 0: 2
// - Row 1: 4
// - Row 2: 1
// - Row 3: 2
// - Row 4: 5
// The rows ordered from weakest to strongest are [2,0,3,1,4].

// 행 마지막 인덱스 부터 탐색하면됨
var kWeakestRows = function (mat, k) {
  const set = new Set();

  for (let col = 0; col < mat[0].length; col++) {
    for (let row = 0; row < mat.length; row++) {
      if (set.size === k) break;

      if (!mat[row][col] && !set.has(row)) {
        set.add(row);
      }
    }
  }

  for (let row = 0; row < mat.length; row++) {
    if (set.size === k) break;

    if (mat[row][mat[0].length - 1] && !set.has(row)) {
      set.add(row);
    }
  }

  return [...set];
};

console.log(kWeakestRows(mat, k));
