// 꼭대기 경우의 수

const n = 5;
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// 1칸 혹은 두칸 올라감
// 동적특: dfs, bfs에서 원본의 자료구조를 토대로 값을 넣음.
// 1 = 1, 2 = 2, 3 = 3, 4 = 5, 5 = 8
// n[i] = n[i-1] + n[i-2]
var climbStairs = function (n) {
  if (n <= 2) return n;

  let result = 0;
  let onePrev = 2;
  let twoPrev = 1;

  for (let i = 3; i <= n; i++) {
    result = onePrev + twoPrev;
    twoPrev = onePrev;
    onePrev = result;
  }
  return result;
};

console.log(climbStairs(n));
