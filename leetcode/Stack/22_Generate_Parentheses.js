// 괄호쌍이 n인 괄호 조합 출력하기

const n = 3;
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// "(" = 0, ")" = 1 [000111, 001011, 001101, 010011, 010101]

// 재귀함수 ㄱㄱ
// 3이 최대 length고, )은 (보다 많을 수 없음.
// str의 값을 재귀중에 공유하고있어서 문제가 생김.
// str이 따로다녀야함.
var generateParenthesis = function (n) {
  const a = [];
  const createStr = (n, open = 0, close = 0, str = "") => {
    if (close === n) {
      a.push(str);
      return;
    }
    if (open < n) createStr(n, open + 1, close, str + "(");
    if (close < open) createStr(n, open, close + 1, str + ")");
  };
  createStr(n);
  return a;
};

console.log(generateParenthesis(n));
