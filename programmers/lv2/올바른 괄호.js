// ")"이 "(" 보다 많으면 펄스
// 2분
function solution(s) {
  let count = 0;

  for (const char of s) {
    if (char === "(") count++;
    else count--;

    if (count < 0) return false;
  }

  return count === 0;
}