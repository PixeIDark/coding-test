// 메세지 패턴:
// 1. mentions_string: 포함되는 사용자 count + 1, 한 사용자가 여러번 언급될 수 있음
// 2. ALL: 모든 사용자 count + 1
// 3. HERE: 온라인 사용자 count + 1
// 오프라인 이벤트:
// 1. OFFLINE: 60시간 동안 오프라인 상태
// 유저 아이디는 0 ~ 99, 크기 100인 배열 만들어서 빈도 값 저장.
// 오프라인도 크기 100인 배열을 만들고, 인덱스는 유저 아이디, 요소는 온라인으로 바뀌는 시간
// 61분
var countMentions = function (numberOfUsers, events) {
  events.sort((a, b) => {
    if (a[0] === "OFFLINE") return -1;
    else return 1;
  });

  const n = numberOfUsers;
  const freq = Array(n).fill(0);
  const offlineRanges = Array.from({length: n}, () => []);
  let allCount = 0;

  for (const [type, strTime, range] of events) {
    const time = Number(strTime);

    if (type === "OFFLINE") {
      const id = Number(range);
      offlineRanges[id].push([time, time + 60]);
      continue;
    }

    if (range === "ALL") allCount++;
    else if (range === "HERE") {
      for (let i = 0; i < n; i++) {
        const offlineRange = offlineRanges[i];
        if (offlineRange.length === 0) {
          freq[i]++;
          continue;
        }
        let isOk = true;

        for (const [start, end] of offlineRange) {
          if (start <= time && time < end) {
            isOk = false;
            break;
          }
        }

        if (isOk) freq[i]++;
      }
    } else {
      const strRanges = range.split(" ");

      for (const strRange of strRanges) {
        const users = strRange.split("id");
        const id = Number(users[1]);

        freq[id]++;
      }
    }

  }

  return freq.map((x) => x + allCount);
};