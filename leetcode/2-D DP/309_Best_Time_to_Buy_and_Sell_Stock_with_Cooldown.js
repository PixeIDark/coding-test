// 최적의 손절로 이익 극대화 하루 쿨있음

const prices = [1, 2, 3, 0, 2];
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]

// 2차원 dp 만들어서 ㄱㄱ
// 팔면 하루 쿨 있음
// 벽느껴지네.. ㅋ
var maxProfit = function (prices) {
  const dp = new Array(prices.length).fill(0);
  // dp 에 최대 이득을 저장
  // dp-2의 값을 계승할 수 있음

  let amount = 0; // 이게 작아지는 시기오기 전에 팔아야하는게 기본 전제.
  const bfs = (k) => {
    const get = prices[k];
    let amount;
    for (let i = k + 1; i < prices.length; i++) {
      if (amount < prices[i] || i === prices.length - 1) {
        dp[i - 1] = amount + dp[i - 3];
        continue;
      }
      amount = prices[i] - get;
    }
  };

  for (let i = 0; i < prices.length; i++) {
    bfs(i);
  }

  return dp;
};

console.log(maxProfit(prices));
