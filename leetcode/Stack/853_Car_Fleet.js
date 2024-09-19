// 차그룹이 몇개가 골인 하냐임.

const target = 12;
const position = [10, 8, 0, 5, 3];
const speed = [2, 4, 1, 1, 3];
// 1, 1, 12, 7, 3
// Output: 3

// target보다 같거나 작은 조건동안임
// position 요소 + speed 요소 * 1~ 이게 target보다 작을동안 반복
// 목적지에 도착하는 시간별로 정렬해야함.
// 뒷 차가 앞차 따라잡으면 같은 그룹임.
// speed가 현재가 더 높으면 따라잡는다는 말임. 즉, 같은 그룹이 된다.
// position내림차로 정렬하고, (target-position)/speed 비교 이전과 현재 인덱스끼리
// 맨 앞 인덱스가 가장 앞 서있음. 뒷 인덱스가 앞 인덱스보다 time이 높으면 그룹될 가망 없음.
var carFleet = function (target, position, speed) {
  const cars = position
    .map((p, i) => {
      return {
        location: p,
        time: (target - p) / speed[i],
      };
    })
    .sort((a, b) => b.location - a.location);

  let k = 0;
  let max = 0;
  for (let car of cars) {
    if (car.time > max) {
      max = car.time;
      k++;
    }
  }

  return k;
};

console.log(carFleet(target, position, speed));
