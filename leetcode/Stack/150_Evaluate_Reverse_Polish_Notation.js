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

// `${s}` 마지막에 s를 저기에 넣는 방식으로 s는 문자열임.
// s를 폴란드 연산 한번마다 ()를 씌어줘야함.
// 연산판별하는 객체를 만들자. "+": "+"
// 최초의 연산자 이전에 있는 숫자들을 배열 a,
// 최초의 연산자 이후에 뜨는 숫자들을 배열 b에 넣어.
// 연산자들을 배열 c에 넣어.
//
var evalRPN = function (tokens) {
  let s = "";

  for (let i = 0; i < tokens.length; i++) {}
};
