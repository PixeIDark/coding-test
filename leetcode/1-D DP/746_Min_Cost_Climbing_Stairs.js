// 등반 최소 비용 출력

const cost = [10, 15];
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.

// 0또는 1 에서 시작, 한칸 혹은 두칸 오를 수 있음.
// index에 들렸을 때의 최소 값을 저장 하는 배열을 만들고
// cost[2] 부터 대조하는 거
// arr = [0, 0, 1, 2, 2, 3, 3, 4, 4, 5, 5
// cos = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
var minCostClimbingStairs = function (cost) {
  cost.push(0);

  let arr = [0, 0];

  let onePrev = cost[1];
  let twoPrev = cost[0];

  for (let i = 2; i < cost.length; i++) {
    let curr = Math.min(onePrev, twoPrev);
    arr.push(curr);
    twoPrev = onePrev;
    onePrev = curr + cost[i];
  }

  return arr.pop();
};

console.log(minCostClimbingStairs(cost));

// DP는 처음에 패턴 직접 만들어보고 해야함.
