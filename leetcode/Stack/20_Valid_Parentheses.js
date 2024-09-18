// 괄호 열닫 잘됬는지 검사하는 거
const s = "([]){}";
// Output: true

// if문 갈겨라걍
var isValid = function (s) {
  const a = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    let i = char in map;
    if (!i) {
      a.push(char);
      continue;
    }
    let j = a[a.length - 1] === map[char];
    if (j) {
      a.pop();
      continue;
    }
    return false;
  }
  return !a.length;
};

console.log(isValid(s));
