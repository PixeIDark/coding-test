// 시작 인덱스 반환 돌수 없으면 -1

const gas = [3, 1, 1],
  cost = [1, 2, 2];
// Output: 3
// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.

// gas[i] >= cost[i] 여야 초기 시작이 가능.
// 한 바퀴 돌아지면 gas[i]반환 안그러면 걍 -1
// gas[i] 찾으면 지금까지 gas의 합과 앞으로의 cost합 비교
// 상대가 안되잖아 ㅋㅋ
var canCompleteCircuit = function (gas, cost) {
  let tank = 0;
  let dept = 0;
  let index = 0;

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (i === gas.length - 1 && tank >= -dept) return index;
    if (tank < 0) {
      dept += tank;
      tank = 0;
      index = i + 1;
    }
  }
  return -1;
};

console.log(canCompleteCircuit(gas, cost));
