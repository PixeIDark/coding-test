// 영토 병합과 주 최적화.

const intervals = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  newInterval = [4, 8];
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// start는 작은게 우선, end는 큰 게 우선
// intervals는 오름차순으로 정렬됨. start기준
// 영토 겹치는 거 있으면 병합 가져올거 없으면 제거.
// 걍일단 돌면서 newInterval 값을 정의해주고 다음에 정리하자.
// newInterval 내부이거나, 겹친놈이면 제거.
// 크 이거지! 상대가 안되잖아`
var insert = function (intervals, newInterval) {
  const arr = [];

  for (const interval of intervals) {
    let a = 0;
    if (newInterval[0] <= interval[0] && newInterval[1] >= interval[1]) a++;

    if (newInterval[0] >= interval[0] && newInterval[0] <= interval[1]) {
      newInterval[0] = interval[0];
      a++;
    }

    if (newInterval[1] <= interval[1] && newInterval[1] >= interval[0]) {
      newInterval[1] = interval[1];
      a++;
    }

    if (!a) arr.push(interval);
  }
  arr.push(newInterval);
  arr.sort((a, b) => a[0] - b[0]);

  return arr;
};

console.log(insert(intervals, newInterval));
