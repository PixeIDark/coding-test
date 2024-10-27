// 동전 개수 최소로 해서 amount 되는 개수 반환 안되면 -1

const coins = [1, 2, 5],
  amount = 11;
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// amount를 max로 계속 빼고 max값보다 작아지면 다른 얘로 계산
// 그와중에 요소의 나머지로 값 나오나 체크
// amount 0이 아니면 계속 반복되게
// amount 4 [0, 무한, 무한 , 무한, 무한]
//          [0, 1, 1, 2, 2]
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let curr = 1; curr <= amount; curr++) {
    for (const coin of coins) {
      if (curr >= coin) {
        dp[curr] = Math.min(dp[curr], dp[curr - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange(coins, amount));
