// n 을 이진수형태의 십진수로 최소 개수로 분할 시, 최소 개수 반환
// n의 문자열중 가장 큰 숫자가 정답임
// 3분
var minPartitions = function (n) {
  let result = 0;

  for (const char of n) {
    const number = Number(char);
    result = Math.max(result, number);
  }

  return result;
};