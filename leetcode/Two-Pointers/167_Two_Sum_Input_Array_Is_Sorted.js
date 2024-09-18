// sum이 target인 인덱스 + 1씩 배열로 출력

const numbers = [2, 7, 11, 15];
const target = 9;
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    let sum = numbers[l] + numbers[r];

    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum < target) {
      l++;
    } else r--;
  }
};

console.log(twoSum(numbers, target));
