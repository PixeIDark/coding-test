// 반환 값은 0 ~ 0인 요소 개수 * 2
// 요소가 0인곳에서 시작 할 수 있고 초기 방향은 둘다 해봐야함
// 범위 초과하면 실패하는것으로 간주함. 즉 오른쪽이든 왼쪽으로든 이동하다가 1이상의 요소를 못만나면 끝
// 모든 요소가 0이면 즉시종료
// 처음 0 시작 위치에서 좌합과 우합에 따라 되는지 여부 가능
// [1, 0, 1, 0, 3] => [1, 0, 1, 0, 2] => [1, 0, 0, 0, 2] => [1, 0, 0, 0, 1]
// 좌합과 우합이 같으면 좌우 시작 상관없이 둘다되서 += 2
// 좌합과 우합이 1차이면 둘중 하나면 되서 += 1
// 18분
var countValidSelections = function (nums) {
  let sumLeft = 0;
  let sumRight = nums.reduce((a, b) => a + b, 0);
  let result = 0;

  for (const num of nums) {
    sumLeft += num;
    sumRight -= num;

    if (num !== 0) continue;

    const diff = Math.abs(sumLeft - sumRight);

    if (diff === 0) result += 2;
    else if (diff === 1) result += 1;
  }

  return result;
};