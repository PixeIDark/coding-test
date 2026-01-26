// 임의의 두 요소 사이의 절댓값이 최소인 모든 쌍을 찾으세요
// [][] | [] 반환
// 1. 오름차 정렬하기
// 2. i, i - 1 비교로 최소 차이 찾기
// 5분
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  let minDiff = Infinity;
  let result = [];

  for (let i = 1; i < n; i++) {
    const diff = arr[i] - arr[i - 1];

    if (minDiff > diff) {
      minDiff = diff;
      result = [];
    }

    if (minDiff === diff) {
      result.push([arr[i - 1], arr[i]]);
    }
  }

  return result;
};