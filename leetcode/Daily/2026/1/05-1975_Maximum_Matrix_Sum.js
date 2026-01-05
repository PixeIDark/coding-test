// 인접한 두 요소를 선택해서 각각 -1을 곱한다.
// 반복해서 matrix 요소의 총합을 가장 크게 만들어서 반환
// 음수의 개수가 짝수면 모두 양수로 바꿀수있고, 아니면 단 하나의 음수가존재
// 절대 값이 가장 작은 수를 음수로 채택해야하는데, 이는 근본 음수가 아닌 양수 요소들도 평가해야함
// 1. 최소 절대값 구하기
// 2. matrix 모든 요소 절대값 합 구하기
// 3. 음수 개수가 홀수면, 모든 합 - 최소 절대 값 * 2 반환. 짝수면 전체합 반환
// 17분
var maxMatrixSum = function (matrix) {
  const nums = matrix.flat();
  let sum = 0;
  let min = 1e6;
  let count = 0;

  for (const num of nums) {
    if (num < 0) count++;
    const abs = Math.abs(num);
    sum += abs;
    min = Math.min(min, abs);
  }

  return count % 2 === 1 ? sum - min * 2 : sum;
};