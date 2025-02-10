// 숫자 왼쪽 문자열 지우기

const s = "cbf34af5";
// Output: ""
// Explanation:
//     First, we apply the operation on s[2], and s becomes "c4".
//     Then we apply the operation on s[1], and s becomes "".

// cb34
var clearDigits = function (s) {
  // 숫자 기준 왼쪽 문자열 제거하게
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i].charCodeAt(0);
    if (char >= 97 && char <= 122) arr.push(s[i]);
    else arr.pop();
  }

  return arr.join("");
};

console.log(clearDigits(s));
