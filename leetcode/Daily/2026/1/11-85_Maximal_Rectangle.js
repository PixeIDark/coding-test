// 가장 큰 직사각형의 너비 반환
// 크기가 작다 시간복잡도 고민하지말자
// 75분
var maximalRectangle = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const heights = Array(m).fill(0);
  let maxWidth = 0;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (matrix[y][x] === "1") heights[x]++;
      else heights[x] = 0;
    }

    maxWidth = Math.max(maxWidth, getWidth(heights));
  }

  function getWidth(heights) {
    const stack = [-1];
    let max = 0;

    for (let i = 0; i <= heights.length; i++) {

      while (stack.length > 1 && (heights[stack.at(-1)] > heights[i] || i === heights.length)) {
        const height = heights[stack.pop()];
        const length = i - stack.at(-1) - 1;
        max = Math.max(max, height * length);
      }

      stack.push(i);
    }

    return max;
  }

  return maxWidth;
};