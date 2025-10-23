// (s[i] + s[i + 1]) % 10 두 자리 숫자가될 떄까지 반복. 마지막에 두 숫자가 같은지 불리언 반환
// 양끝의 나머지가 다르면 즉시 false <= 아님 다해봐야암
// 18분
var hasSameDigits = function (s) {
  while (s.length > 2) {
    let str = ""

    for (let i = 0; i < s.length - 1; i++) {
      str += (Number(s[i]) + Number(s[i + 1])) % 10
    }

    s = str
  }

  return s[0] === s[1]
};