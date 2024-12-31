// 돈 최소로 여행

const days = [1, 4, 6, 7, 8, 20],
  costs = [2, 7, 15];
// Output: 11
// Explanation: For example, here is one way to buy passes that lets you travel your travel plan:
//     On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
// On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
// On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
// In total, you spent $11 and covered all the days of your travel.

// 점화식이 시작
var mincostTickets = function (days, costs) {
  const dp = Array(days[days.length - 1] + 1).fill(0);
  const set = new Set(days);

  for (let i = 1; i <= days[days.length - 1]; i++) {
    if (!set.has(i)) {
      dp[i] = dp[i - 1];
      continue;
    }

    dp[i] = Math.min(
      dp[Math.max(0, i - 1)] + costs[0],
      dp[Math.max(0, i - 7)] + costs[1],
      dp[Math.max(0, i - 10)] + costs[2],
    );
  }

  return dp[days[days.length - 1]];
};

console.log(mincostTickets(days, costs));
