// 최소한의 벌금이 부과되려면 몇시에 문을 닫아야하는지. 문이열리는 시간은 12시 고정
// 26분
var bestClosingTime = function (customers) {
  const n = customers.length;
  let currPenalty = customers.split("").filter(x => x === "Y").length;
  let minPenalty = currPenalty;
  let minHour = 0;

  for (let i = 0; i < n; i++) {
    const value = customers[i] === "Y" ? -1 : 1;
    currPenalty += value;

    if (minPenalty > currPenalty) {
      minPenalty = currPenalty;
      minHour = i + 1;
    }
  }

  return minHour;
};