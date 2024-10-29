// amount가 될 수 있는 경우의 수 출력

const amount = 5,
  coins = [1, 2, 5];
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

var change = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0);

  dp[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp.pop();
};

console.log(change(amount, coins));
