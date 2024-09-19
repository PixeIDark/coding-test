// 역 폴란드 ㅋㅋ

const tokens = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// 배열을 만들어서 하나씩 넣음 숫자면 그냥넣어
// 연산자일 경우 pop 이용해서 맨뒤랑 두번째 연산시켜주면 끝임
// 첨에 바로 Number때려주고
var evalRPN = function (tokens) {
  let a = [];

  for (let i = 0; i < tokens.length; i++) {
    const n = parseInt(tokens[i]);
    if (n * 0 === 0) {
      a.push(n);
      continue;
    }

    const num1 = a.pop();
    const num2 = a.pop();
    switch (tokens[i]) {
      case "+":
        a.push(num1 + num2);
        break;
      case "-":
        a.push(num2 - num1);
        break;
      case "*":
        a.push(num1 * num2);
        break;
      case "/":
        a.push(Math.trunc(num2 / num1));
        break;
    }
  }
  return a[0];
};
console.log(evalRPN(tokens));
