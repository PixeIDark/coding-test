// 하위 배열 범위를 선택해서 해당 정수를 모두 0으로 만들 수 있음 작업당
// 단, 0이 존재하는 하위 배열은 없음.
// 최소 작업 횟수 반환.
// 가장 바깥쪽 부터 0 만들기
// 19분
var minOperations = function (nums) {
  const stack = [];
  let i = 0;
  let result = 0;

  for (const num of nums) {
    while (i > 0 && stack[i - 1] > num) {
      i--;
    }

    if (num === 0) {
      k = 0;
      continue;
    }

    if (i === 0 || num !== stack[i - 1]) {
      stack[i++] = num;
      result++;
    }
  }

  return result;
};