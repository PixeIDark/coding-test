// 영토분쟁이 있을지 여부

const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
// Output: false

// 정렬후 겹치면 바로 false
var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const arr = [];

  for (const interval of intervals) {
    if (arr.length === 0) {
      arr.push(interval);
      continue;
    }
    if (interval[0] >= arr[arr.length - 1][1]) {
      arr.push(interval);
    } else return false;
  }
  return true;
};

console.log(canAttendMeetings(intervals));
