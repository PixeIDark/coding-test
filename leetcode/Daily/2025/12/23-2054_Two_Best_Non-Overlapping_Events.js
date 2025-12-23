// 최대 두개의 이벤트를 가질 수있고, 합의 최대 값을 반환
// 시작순으로 정렬해서 순회
// 18분
var maxTwoEvents = function (events) {
  events.sort((a, b) => a[0] - b[0]);
  const n = events.length;
  const maxValues = new Array(n);
  maxValues[n - 1] = events[n - 1][2];

  for (let i = n - 2; i >= 0; i--) {
    maxValues[i] = Math.max(events[i][2], maxValues[i + 1]);
  }

  let result = 0;

  for (let i = 0; i < n; i++) {
    const [start, end, value] = events[i];
    const nextIndex = binarySearch(events, end);
    result = Math.max(result, value);

    if (nextIndex !== -1) {
      result = Math.max(result, value + maxValues[nextIndex]);
    }
  }

  return result;
};

var binarySearch = function (events, endTime) {
  let left = 0;
  let right = events.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const startTime = events[mid][0];

    if (startTime > endTime) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};