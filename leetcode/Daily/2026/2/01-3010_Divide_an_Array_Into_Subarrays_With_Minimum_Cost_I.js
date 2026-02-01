// nums를 3개의 연속된 부분배열로 최소한의 비용으로 나누기
// 배열을 나누는데 필요한 비용은 부분배열의 첫번째 요소 값
// 어디서 시작하냐만 정하면됨 3개의 부분배열 모두
// 첫부분배열의 시작위치는 첫요소로 고정 나머지 2개의 부분배열은 배열을 순회하며 최소값에 넣어줌
// 8분
var minimumCost = function (nums) {
  const n = nums.length;
  const arr = nums.slice(1).sort((a, b) => a - b);

  return nums[0] + arr[0] + arr[1];
};