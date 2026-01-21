// 55분
function solution(p) {
  // 1
  const isEmptyStr = (str) => {
    return str === "";
  };

  // 2
  const splitBalancedStr = (str) => {
    let openFreq = 0;
    let closeFreq = 0;
    let u = "";
    let v = "";

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === "(") openFreq++;
      else closeFreq++;

      if (openFreq === closeFreq) {
        u = str.substring(0, i + 1);
        v = str.substring(i + 1);
        return {u, v};
      }
    }
  };

  // 3
  const isValidStr = (str) => {
    let openFreq = 0;
    let closeFreq = 0;

    for (const char of str) {
      if (char === "(") openFreq++;
      else closeFreq++;

      if (closeFreq > openFreq) return false;
    }

    return true;
  };

  // 4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
  const reverseStr = (str) => {
    return str.split("").slice(1, str.length - 1).map(char => char === "(" ? ")" : "(").join("");
  };

  const dfs = (p) => {
    if (isEmptyStr(p)) return "";

    const {u, v} = splitBalancedStr(p);

    // 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
    if (isValidStr(u)) {
      return u + dfs(v);
    } else {
      // 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
      return "(" + dfs(v) + ")" + reverseStr(u);
    }
  };

  const result = dfs(p);

  return result;
}







