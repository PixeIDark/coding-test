// 사과를 전부 담을 수 있는 최소 상자 개수 반환
// 사과 묶음에서 사과를 나눠서 담을 수 있음
// 1. 박스 내림차 정렬 및 사과의 총개수 카운트
// 2. 총개수를 카운트해서 상자를 하나씩 소모
// 6분
var minimumBoxes = function (apple, capacity) {
  let total = apple.reduce((a, b) => a + b, 0);
  capacity.sort((a, b) => b - a);

  for (let i = 0; i < capacity.length; i++) {
    total -= capacity[i];
    if (total <= 0) return i + 1;
  }
};