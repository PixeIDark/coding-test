// 재도전
// n개의 방이 배정됨, [0]은 고유함
// meetings 에서 시작 시간이 빠른 순으로 앞 방 부터 회의에 배정됨
// 가장 많이 회의가 열린 방을 반환
// [0] 오름차 정렬
// 39분
var mostBooked = function (n, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);
  const closeRooms = Array(n).fill(0); // 회의가 끝나는 시간을 저장
  const roomsFreq = Array(n).fill(0); // 방 사용빈도 저장
  let maxFreq = 0;

  for (let i = 0; i < meetings.length; i++) {
    let [start, end] = meetings[i];
    let roomNumber = closeRooms.findIndex((room) => room <= start);

    if (roomNumber >= 0) {
      closeRooms[roomNumber] = end;
    } else {
      let minEndTime = Infinity;
      let minRoomNumber = 0;

      for (let j = 0; j < n; j++) {
        if (closeRooms[j] < minEndTime) {
          minEndTime = closeRooms[j];
          minRoomNumber = j;
        }
      }

      roomNumber = minRoomNumber;
      closeRooms[roomNumber] = minEndTime + end - start;
    }

    maxFreq = Math.max(maxFreq, ++roomsFreq[roomNumber]);
  }

  const result = roomsFreq.indexOf(maxFreq);

  return result;
};