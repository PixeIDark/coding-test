// 영토 병합.

const intervals = [
  [2, 6],
  [4, 5],
  [6, 7],
  [1, 10],
];
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

var merge = function (intervals) {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (const interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
    }
  }

  return result;
};

console.log(merge(intervals));
