// 겹치는 영역인 거 제거 한 개수 출력

const intervals = [
  [-25322, -4602],
  [-35630, -28832],
  [-33802, 29009],
  [13393, 24550],
  [-10655, 16361],
  [-2835, 10053],
  [-2290, 17156],
  [1236, 14847],
  [-45022, -1296],
  [-34574, -1993],
  [-14129, 15626],
  [3010, 14502],
  [42403, 45946],
  [-22117, 13380],
  [7337, 33635],
  [-38153, 27794],
  [47640, 49108],
  [40578, 46264],
  [-38497, -13790],
  [-7530, 4977],
  [-29009, 43543],
  [-49069, 32526],
  [21409, 43622],
  [-28569, 16493],
  [-28301, 34058],
];
// Output: 1

// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

// sort로 정렬 쫙해주고 간격이 겹칠경우 개수 한개씩 올려주면됨
// "최소 값" 하아..
// sort 정렬을 start, end 차이 오름차로 해보자
// [2,4] [1,5]
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let end = -Infinity;
  let result = 0;

  for (const interval of intervals) {
    if (interval[0] >= end) {
      result++;
      end = interval[1];
    }
  }

  return intervals.length - result;
};
// intervals.length - arr.length;
console.log(eraseOverlapIntervals(intervals));
