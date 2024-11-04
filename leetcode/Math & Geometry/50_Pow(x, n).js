// x의 n제곱 pow(x,n)을 쓰지말고 내가 구현해야함

const x = 2.0,
  n = -2147483648;
// Output: 9.26100

// n을 절대값으로 바꾸고 -였으면 보정치를 줘야함.
// 마이너스이면 1/x가 되야함
// n짝수면 과감하게 가능.
var myPow = function (x, n) {
  if (n === 0 || x === 1) return 1;
  if (x === -1 && n % 2 === 1) return -1;
  if (x === -1 && n % 2 === 0) return 1;

  const isMinus = n < 0 ? true : false;
  n = Math.abs(n);

  let pow = isMinus ? 1 / x : x;
  for (let i = 1; i < n; i++) {
    if (pow === 0) return pow;

    if (isMinus) {
      pow = (pow * 1) / x;
      continue;
    }

    pow = pow * x;
  }
  return pow;
};

console.log(myPow(x, n));
