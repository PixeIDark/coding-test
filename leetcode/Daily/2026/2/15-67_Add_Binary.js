// a, b를 십진 숫자로 바꾸고 합 c를 구함
// c를 .toString(2)로 전환
// 빅인트로 부동소수점 없애야함
// 12분
var addBinary = function (a, b) {
  const c = BigInt("0b" + a) + BigInt("0b" + b);
  return c.toString(2);
};