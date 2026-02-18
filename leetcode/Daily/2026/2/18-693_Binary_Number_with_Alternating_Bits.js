// "101010" 패턴 판별
// 1. 이진 문자열로 바꾸기
// 2. 하나하나 대조하기
// 8분
var hasAlternatingBits = function (n) {
  const str = n.toString(2);

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) return false;
  }

  return true;
};