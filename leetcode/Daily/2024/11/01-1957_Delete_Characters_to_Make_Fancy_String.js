// 연속된 세 문자열 없게 만들기

const s = "aaabaaaa";
// Output: "leetcode"
// Explanation:
// Remove an 'e' from the first group of 'e's to create "leetcode".
// No three consecutive characters are equal, so return "leetcode".

// 걍 뭐 저장한다음에 3연속 나오면 걸러라
var makeFancyString = function (s) {
  let result = [s[0]];
  let mana = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === result[result.length - 1]) {
      mana++;
    } else {
      mana = 1;
    }

    if (mana >= 3) {
      continue;
    }

    // result += s[i] 하면 원시형이라 시간복잡도 40배 증가함..
    result.push(s[i]);
  }

  return result.join("");
};

console.log(makeFancyString(s));
