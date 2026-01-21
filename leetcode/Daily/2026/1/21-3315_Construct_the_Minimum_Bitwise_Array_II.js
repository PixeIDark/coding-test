// 10분
var minBitwiseArray = function (nums) {
  let result = [];
  let d = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (num % 2 === 0) {
      result.push(-1);
      continue;
    }

    let bit = 1;

    while ((num & bit) !== 0) {
      bit <<= 1;
    }

    result.push(num - (bit >> 1));
  }

  return result;
};