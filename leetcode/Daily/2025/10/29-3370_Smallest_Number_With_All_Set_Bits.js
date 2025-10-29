// n 보다 큰 "1"로만 이루어진 2진법을 10진법으로 전환해서 반환
// n 을 2 몇승보다 크지 따지면됨 2의 3 승보다 n 이크다면 정답은 2^4 - 1
// 5분
var smallestNumber = function (n) {
  let double = 1;

  while (n > double - 1) {
    double = double * 2;
  }

  return double - 1;
};