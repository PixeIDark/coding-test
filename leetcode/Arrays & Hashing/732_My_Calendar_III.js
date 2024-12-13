// Input
//     ["MyCalendarThree", "book", "book", "book", "book", "book", "book"]
//     [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
// // Output
// //     [null, 1, 1, 2, 3, 3, 3]
// //
// // Explanation
// // MyCalendarThree myCalendarThree = new MyCalendarThree();
// // myCalendarThree.book(10, 20); // return 1
// // myCalendarThree.book(50, 60); // return 1
// // myCalendarThree.book(10, 40); // return 2
// // myCalendarThree.book(5, 15); // return 3
// // myCalendarThree.book(5, 10); // return 3
// // myCalendarThree.book(25, 55); // return 3

var MyCalendarThree = function () {
  // 시간별 예약 상태를 저장할 맵 초기화
  this.timeline = new Map();
};

MyCalendarThree.prototype.book = function (startTime, endTime) {
  // 시작 시간에 +1 (새로운 이벤트 시작)
  this.timeline.set(startTime, (this.timeline.get(startTime) || 0) + 1);
  // 종료 시간에 -1 (이벤트 종료)
  this.timeline.set(endTime, (this.timeline.get(endTime) || 0) - 1);

  let maxBookings = 0; // 최대 booking 수
  let currentBookings = 0; // 현재 시점의 booking 수

  // 시간순으로 정렬하여 각 시점별 booking 수 계산
  for (let count of [...this.timeline.entries()]
    .sort((a, b) => a[0] - b[0])
    .map((x) => x[1])) {
    currentBookings += count;
    maxBookings = Math.max(maxBookings, currentBookings);
  }

  return maxBookings;
};

const myCalendar = new MyCalendarThree();
console.log(myCalendar.book(10, 20));
console.log(myCalendar.book(50, 60));
console.log(myCalendar.book(10, 40));
console.log(myCalendar.book(5, 15));
console.log(myCalendar.book(5, 10));
