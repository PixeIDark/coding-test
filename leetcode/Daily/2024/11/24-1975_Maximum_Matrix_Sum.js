// 최대 합 인접한 요소 두개에 -1 언제든지 곱해볼수있음.

const matrix = [
  [9, -3, -4],
  [-4, -1, -3],
  [-6, -3, -3],
];
// Output: 16
// Explanation: We can follow the following step to reach sum equals 16:
// - Multiply the 2 last elements in the second row by -1.

// 음수개수가 홀수면 가장 작은 값 제외하고 나머지는 양수가 될수 있음
// 짝수면 전부 양수가 될수 있음.
// 1. 절대값으로 했을 시, 가장 작은 숫자 기억
// 2. 짝수, 양수 여부 확인
// 3. 전부 합치고. 홀수면 최소 절대 값을 빼줌.
var maxMatrixSum = function (matrix) {
  let result = 0;
  let min = Infinity;
  let minusCount = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) minusCount++;
      const num = Math.abs(matrix[i][j]);
      result += num;
      min = Math.min(min, num);
    }
  }

  if (minusCount % 2 !== 0) {
    result -= min * 2;
  }

  return result;
};

console.log(maxMatrixSum(matrix));
