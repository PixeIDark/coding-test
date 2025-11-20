// 각 인터벌 마다 2개 이상 가져가야함
// 인터벌이 가져간 숫자가 겹치면 최소화. 각 interval 에서 += 0 ~ 2
// prevEnd - currStart >= 2 이상일 시, += 0. 0이나1 이면 += 2, 1
// [[1,3],[1,4],[2,5],[3,5]] result = 2
// 3 - 1 >= 2, result = 2
// 4 - 2 >= 2, result = 2
// 정수 두개를 선택해서 인터벌에 포함되는지 확인
// 23분
var intersectionSizeTwo = function (intervals) {
  intervals.sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0];
    return a[1] - b[1];
  });

  let result = 0;
  let first = -1;
  let second = -1;

  for (const [start, end] of intervals) {
    let count = 0;

    if (first >= start && first <= end) count++;
    if (second >= start && second <= end) count++;

    // count 2 미만이면 영입해야함
    if (count === 0) {
      first = end - 1;
      second = end;
      result += 2;
    } else if (count === 1) {
      first = second;
      second = end;
      result++;
    }
  }

  return result;
};