// nums에 없는 비트 반환

const nums = ["111", "011", "001"];
// Output: "101"
// Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.

// 숫자와 nums 요소를 & 로 같은게 있는지 판별
var findDifferentBinaryString = function (nums) {
  const ten = Math.pow(2, nums.length) - 1;
  const set = new Set();

  for (const num of nums) {
    set.add(num & ten);
  }

  let result = 0;
  for (let i = 0; i < 17; i++) {
    if (!set.has(i)) {
      result = i;
      break;
    }
  }

  result = result.toString(2);
  const n = result.length;
  for (let i = 0; i < nums.length - n; i++) {
    result += "0";
  }
  return result;
};

console.log(findDifferentBinaryString(nums));

// 1 = 1, 2 = 10, 3 = 11, 4 = 100, 5 = 101, 6 = 110, 7 = 111
