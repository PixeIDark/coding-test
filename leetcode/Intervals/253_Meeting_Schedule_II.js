// 충돌없이 회의 예약 가능한 날짜 몇개인지

const intervals = [(1, 5), (2, 6), (3, 7), (4, 8), (5, 9)];
// Output: 2

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

// 기본 1로 주고 겹칠때 마다 +1
class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {number}
   */
  minMeetingRooms(intervals) {
    intervals.sort((a, b) => a.start - b.start);

    const result = [];
    let a = 1;

    for (const interval of intervals) {
      if (result.length === 0) {
        result.push(interval);
        continue;
      }
      let n = 0;
      for (const r of result) {
        if (r.end < interval.start) {
          n++;
          break;
        }
      }

      if (!n) {
        a++;
      }
      result.push(interval);
    }

    return a;
  }
}

console.log(new Solution().minMeetingRooms(intervals));
