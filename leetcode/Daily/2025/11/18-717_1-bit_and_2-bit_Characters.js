// 마지막 문자가 0으로 끝나는지 여부
// 11, 10, 0 세가지 문자만 사용가능
// [0]부터 위의 문자를 대입 후, 마지막이 0으로 끝나는지
// 12분
var isOneBitCharacter = function (bits) {
  for (let i = 0; i < bits.length; i++) {
    if (i === bits.length - 1) return true;

    if (bits[i] === 1) i++;
  }

  return false;
};