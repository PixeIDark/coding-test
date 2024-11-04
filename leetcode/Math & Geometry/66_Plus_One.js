// +1 더해서 배열로 리턴

const digits = [9, 9, 9, 8, 9, 9];
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// [9,9,9,9,9,9] = [1,0,0,0,0,0,0]
// [9,9,9,9,9,9,0]
var plusOne = function (digits) {
  digits.push(0);

  for (let i = digits.length - 2; i >= 0; i--) {
    if (digits[i] + 1 < 10) {
      digits[i] += 1;
      digits.pop();
      return digits;
    }

    if (i === 0) {
      digits[i] = 1;
      return digits;
    }
    digits[i] = 0;
  }
};

console.log(plusOne(digits));
