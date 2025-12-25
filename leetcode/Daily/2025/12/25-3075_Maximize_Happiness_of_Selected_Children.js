// happiness 요소를 k 만큼 선택할 수 있고, 한 번 선택할 때마다 선택된 요소를 제외한 모든 요소의 값 -1 일 때,
// 최대 요소 합계 반환
// 1. 내림차 정렬하기
// 2. k개의 요소만큼 합하기
// 0밑으로는 안떨어짐
// [1,2,3,4,5,6], k = 4
// 6 + 4 + 2 + 0 = 12 <=> 18 - 4 * 3 / 2
// 6 + 4 + 2 = 12 <=> 15 - 3 * 2 / 2
// 6 + 4 = 10 <=> 11 - 2 * 1 / 2
// 16분
var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < k; i++) {
    const value = happiness[i] - i;
    if (value <= 0) break;

    result += value;
  }

  return result;
};