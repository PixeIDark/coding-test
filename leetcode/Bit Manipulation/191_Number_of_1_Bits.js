// 비트에서 1의 개수

const n = 11;
// Output: 3
// Explanation: The input binary string 1011 has a total of three set bits.

// 1011 1010 1001 1000
var hammingWeight = function (n) {
  let result = 0;

  while (n > 0) {
    if (n & (1 === 1)) result++;
    n >>= 1;
  }

  return result;
};

console.log(hammingWeight(n));
