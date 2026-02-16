// n => 이진수
// 이진수 => 배열
// 배열 => 뒤집기
// 뒤집은 배열 => 이진수
// 이진수 => 정수
// 8분
var reverseBits = function (n) {
  const bit = n.toString(2);
  const arr = bit.split("");
  const diff = 32 - arr.length;
  const reversedArr = [...arr.reverse(), ...Array(diff).fill("0")];
  const reversedBit = reversedArr.join("");
  // bit.length < 32, 적은 만큼 앞에 "0" 삽입
  // ReversedArr에 푸시하면될듯

  return parseInt(reversedBit, 2);
};