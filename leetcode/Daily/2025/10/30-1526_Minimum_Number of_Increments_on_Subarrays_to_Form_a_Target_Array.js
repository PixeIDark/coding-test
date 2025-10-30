// 작업을 소모해서 연속된 하위배열의 요소들을 증가
// 작업 소모 최소로해서 target 과 같은 요소로 만들고 작업 소모 반환
// 감소 구간에서 감소값을 작업 소모에 더함
// 56분
var minNumberOperations = function (target) {
  let result = 0;

  for (let i = 0; i < target.length - 1; i++) {
    result += Math.max(0, target[i] - target[i + 1]);
  }

  return result + target.at(-1);
};