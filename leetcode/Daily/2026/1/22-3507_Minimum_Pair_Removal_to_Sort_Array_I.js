// 오름차 정렬이 될수 있도록 합이 가장적은 요소 쌍을 선택해서 합치기
// 여러개인경우 왼쪽에 있는 거 우선
// 감소 구간을 찾으면 그 순간부터 오른쪽으로 가면서 가장 작은 합을 탐색
// 30분, splice 메서드 잘못안게 큼
var minimumPairRemoval = function (nums) {
  const n = nums.length;

  while (true) {
    let minSum = Infinity;
    let minIndex = -1;

    // 기준이 i 이후부터 찾는데 그게아니라 전체를 기준으로 해야함
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] >= nums[i - 1]) continue;

      for (let j = 1; j < nums.length; j++) {
        const sum = nums[j - 1] + nums[j];
        if (sum < minSum) {
          minSum = sum;
          minIndex = j - 1;
        }
      }

      break;
    }

    if (minSum !== Infinity) nums.splice(minIndex, 2, minSum);
    else break;
  }

  return n - nums.length;
};