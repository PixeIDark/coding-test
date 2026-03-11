// 10진수 => 2진수 => 01리버스 이진수
// ^ & |
// 6분
var bitwiseComplement = function (n) {
  const bit = n.toString(2);
  const arr = bit.split("").map(x => x === "1" ? "0" : "1");

  return parseInt(arr.join(""), 2);
};