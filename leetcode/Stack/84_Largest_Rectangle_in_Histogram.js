// 높이만들어서 가장 넓은 너비 값 출력하는 거

const heights = [2, 1, 5, 6, 2, 3];

// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

var largestRectangleArea = function (heights) {
  const stack = [];
  heights.unshift(0);
  heights.push(0);

  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      const width = heights[stack.pop()];
      const height = i - stack[stack.length - 1] - 1;

      max = Math.max(max, width * height);
    }

    stack.push(i);
  }

  return max;
};

console.log(largestRectangleArea(heights));
