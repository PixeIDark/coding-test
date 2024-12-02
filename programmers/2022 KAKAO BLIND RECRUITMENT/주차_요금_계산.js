// 주차 요금 계산

const b = 1,
  fees = [1, 461, 1, 10],
  records = ["00:00 1234 IN"];
// OutPut: [14600, 34400, 5000]
// 차가 두번 주차할수도 있음 들어왔다 나갔다 들어왔따 이렇게
// 나간 기록 업으면 23:59에 나간걸로 처리함.

// 번호 오름차순으로 출력. [차 번호, 요금] 이 친구 sort 한다음 map 으로 [0]컷
// 번호 저장할 때 앞자리 0이면 없애고 순수 number 로 저장
// 1. obj.a = [입차시간, 출차시간] <= 출차하면 배열 초기화(다시 올수도 있음)
const calculator = (n, fees) => {
  if (n <= fees[0]) return fees[1];
  return fees[1] + Math.ceil((n - fees[0]) / fees[2]) * fees[3];
};

function solution(fees, records) {
  const map = new Map();
  const obj = {};
  // IN OUT 신경쓰지 말고 map.has 해서 있으면 시간 빼서 번호랑 주차시간 배열에 저장
  // map.delete도 갈겨주고.
  records.forEach((e) => {
    const record = e.split(" ");
    const times = record[0].split(":");
    const time = parseInt(times[0]) * 60 + parseInt(times[1]);
    const number = record[1];

    if (record[2] === "IN") map.set(number, time);

    if (record[2] === "OUT") {
      const price = time - map.get(number);
      if (obj[number]) obj[number] += price;
      else obj[number] = price;
      map.delete(number);
    }
  });

  const end = 1439;
  [...map.keys()].forEach((e) => {
    const price = end - map.get(e);
    if (obj[e]) obj[e] += price;
    else obj[e] = price;
  });

  return Object.entries(obj)
    .sort((a, b) => a[0] - b[0])
    .map((e) => calculator(e[1], fees));
}
console.log(solution(fees, records));

// console.log(23 * 60 + 59); // 1439
