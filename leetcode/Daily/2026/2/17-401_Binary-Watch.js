// H 8 - 4 조합 불가.
// M 32 - 16 - 8 - 4 조합 불가
// dfs로 카운팅
// turnedOn 에 도달한 dfs은 리턴
// 31분
var readBinaryWatch = function (turnedOn) {
  const leds = [8, 4, 2, 1, 32, 16, 8, 4, 2, 1];
  const result = [];

  const bk = (index, hour, minute, count) => {
    if (hour > 11 || minute > 59) return;

    if (count === turnedOn) {
      const strMinute = minute < 10 ? "0" + minute : String(minute);
      result.push(hour + ":" + strMinute);
      return;
    }

    for (let i = index; i < leds.length; i++) {
      if (i < 4) {
        bk(i + 1, hour + leds[i], minute, count + 1);
      } else {
        bk(i + 1, hour, minute + leds[i], count + 1);
      }
    }
  };

  bk(0, 0, 0, 0);
  return result;
};