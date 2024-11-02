// 이진법으로 바꿧을 때 1의 개수

const n = 5;
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

// var countBits = function (n) {
//   const result = [];

//   for (let i = 0; i <= n; i++) {
//     let bit = i;
//     let count = 0;
//     while (bit > 0) {
//       bit &= bit - 1;
//       count++;
//     }
//     result.push(count);
//   }

//   return result;
// };

// 1 = 1 2 = 10 3= 11 4= 100
var countBits = function (n) {
  const result = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }

  return result;
};

console.log(countBits(n));
