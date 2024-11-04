// 제곱해서 1이 되는지 여부

const n = 2;
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// 횟수 제한두고 해보자
// var isHappy = function (n) {
//   const set = new Set();

//   while (true) {
//     if (n === 1) return true;

//     n = n.toString();
//     let sum = 0;

//     for (const num of n) {
//       sum += Math.pow(num, 2);
//     }

//     if (set.has(sum)) return false;

//     set.add(sum);
//     n = sum;
//   }
// };

// 토끼와 거북이로 가보자
var isHappy = function (n) {
  const calculator = (n) => {
    n = n.toString();
    let sum = 0;

    for (const num of n) {
      sum += num * num;
    }

    return sum;
  };

  let slow = n;
  let fast = calculator(n);

  while (fast !== 1 && slow !== fast) {
    slow = calculator(slow);
    fast = calculator(calculator(fast));
  }

  return fast === 1;
};

console.log(isHappy(n));
