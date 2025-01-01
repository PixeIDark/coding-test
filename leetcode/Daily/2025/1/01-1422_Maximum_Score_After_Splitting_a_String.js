// 왼쪽 오른쪽으로 나눈뒤 합

const s = "00";
// Output: 5
// Explanation:
// All possible ways of splitting s into two non-empty substrings are:
// left = "0" and right = "11101", score = 1 + 4 = 5
// left = "01" and right = "1101", score = 1 + 3 = 4
// left = "011" and right = "101", score = 1 + 2 = 3
// left = "0111" and right = "01", score = 1 + 1 = 2
// left = "01110" and right = "1", score = 2 + 1 = 3

// 인덱스 0 제외하고 1 개수 셈
var maxScore = function (s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") total++;
  }

  let result = 0;
  let left = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") left++;
    else total--;

    result = Math.max(result, total + left);
  }

  return result;
};

console.log(maxScore(s));
