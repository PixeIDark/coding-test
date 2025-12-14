// "S" 가 정확히 두개 존재하도록 복도 구역을 나누는 방법의 수 반환
// "S"의 개수가 홀수면 무조건 0반환
// 구획을 나누고 한 구획안의 식물 개수 + 1의 보정치를 주고, 각 구획끼리 보정치만큼 곱함
// 1. 순회중 "S" 개수가 2개가되면 구획을 나눈다.
// 2. 구획을 나누기까지의 식물 개수를 카운팅
// 3. 다음 구획이 나눠지면 prefix로 식물 개수를 곱한다.
// 29분
var numberOfWays = function (corridor) {
  const count = corridor.split("").filter(x => x === "S").length;

  if (count % 2 === 1 || count === 0) return 0;

  if (count === 2) return 1;

  const mod = 1e9 + 7;
  const totalSeats = 0;
  let seats = 0;
  let plants = 1;
  let isCount = true;
  let result = 0;

  for (const value of corridor) {
    if (isCount && value === "P") plants++;

    if (value === "S") {
      seats++;
      isCount = false;
    }

    if (seats === 2) {
      if (!result) result++;
      else result = (result * plants) % mod;
      plants = 1;
      isCount = true;
      seats = 0;
    }
  }

  return result;
};