// 유효성 검사하기

const s = "(*))";
// Output: true

// *은 치트키임 (, ) 둘 중하나 문법 맞는 쪽으로 제거하거나 대체함

var checkValidString = function (s) {
  let openStack = [];
  let starStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openStack.push(i);
    } else if (s[i] === "*") {
      starStack.push(i);
    } else {
      // s[i] === ')'
      if (openStack.length > 0) {
        openStack.pop();
      } else if (starStack.length > 0) {
        starStack.pop();
      } else {
        return false;
      }
    }
  }

  // 남은 열린 괄호와 별표 처리
  while (openStack.length > 0 && starStack.length > 0) {
    if (openStack[openStack.length - 1] > starStack[starStack.length - 1]) {
      return false;
    }
    openStack.pop();
    starStack.pop();
  }

  return openStack.length === 0;
};

console.log(checkValidString(s));
