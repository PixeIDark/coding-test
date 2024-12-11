// 음수 개수

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

var countNegatives = function (grid) {
  let row = 0;
  let col = grid[0].length - 1;

  let result = 0;

  while (col >= 0 && row < grid.length) {
    if (grid[row][col] < 0) {
      result += grid.length - row;
      col--;
    } else row++;
  }

  return result;
};

console.log(countNegatives(grid));
