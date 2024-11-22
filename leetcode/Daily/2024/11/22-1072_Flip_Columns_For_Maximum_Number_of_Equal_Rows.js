// 행 뒤집고, 최대 동일한 행이 몇개인지

const matrix = [
  [0, 0, 0],
  [0, 0, 1],
  [1, 1, 0],
];
// Output: 2
// Explanation: After flipping values in the first two columns, the last two rows have equal values.

// 뒤집기는 함정임.
// 행의 개수 만큼 배열 만들고, 그안에
var maxEqualRowsAfterFlips = function (matrix) {
  const dp = Array.from({ length: matrix.length }, () => []);
  dp[0] = matrix;

  let count = 0;
  let result = 0;
  while (dp[count].length > 0) {
    const guiding = dp[count].pop();
    let max = 1;

    for (const luring of dp[count]) {
      let different = 0;
      for (let i = 0; i < luring.length; i++) {
        if (guiding[i] !== luring[i]) different++;
      }

      if (different === luring.length || different === 0) {
        max++;
        continue;
      }

      dp[count + 1].push(luring);
    }

    result = Math.max(result, max);

    count++;
    if (max >= dp[count].length) return result;
  }

  return result;
};

// var maxEqualRowsAfterFlips = function (matrix) {
//   const map = new Map();
//
//   for (let i = 0; i < matrix.length; i++) {
//     let guiding = "";
//     let luring = "";
//
//     for (let j = 0; j < matrix[0].length; j++) {
//       guiding += matrix[i][j];
//       luring += matrix[i][j] ^ 1;
//     }
//     const pattern = guiding < luring ? guiding : luring;
//     map.set(pattern, (map.get(pattern) || 0) + 1);
//   }
//
//   return Math.max(...map.values());
// };

console.log(maxEqualRowsAfterFlips(matrix));
