// 모든 요소에 1을 빼거나 더할 수 있음
// 이때 3으로 나누어 떨어지게 할려면 필요한 최소 작업 횟수 구하기
// 3으로 나누어 떨어지지않으면 어차피 작업횟수 1 듬 더하든 빼든
// 7분
var minimumOperations = function (nums) {
  const count = nums.filter(num => num % 3 !== 0).length;

  return count;
};