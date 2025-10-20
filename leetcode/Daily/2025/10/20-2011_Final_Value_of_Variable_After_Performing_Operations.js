// 초기값은 0 인상태로 연산 이어나가서 최종값 찾기 
// operation은 길이3의 문자열. 인덱스1의 위치에 해당하는 부호만 확인하면됨
// 3분
var finalValueAfterOperations = function (operations) {
  return operations.reduce((acc, str) => acc + (str[1] === "+" ? 1 : -1), 0)
};