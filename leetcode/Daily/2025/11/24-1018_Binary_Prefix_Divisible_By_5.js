// 0 | 1 이냐에따라서 + 0 | 1 => 1 | 2 => 3 | 4 => 7 | 8 => 15 | 16
// 16분
var prefixesDivBy5 = function (nums) {
  let bit = 0;
  return nums.map(num => {
    bit = ((bit << 1) | num) % 5;
    return bit === 0;
  });
};