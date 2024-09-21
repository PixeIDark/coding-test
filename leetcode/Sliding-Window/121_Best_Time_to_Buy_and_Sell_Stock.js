// 매수하고 최대 이익 없으면 0반환

const prices = [7, 1, 5, 3, 6, 4];
// Input: prices = [7,6,4,3,1]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// 일단 삿다고 가정한 걸 골라놓고 다음 요소에서 산거보다 값이 적으면 갈아타는 메커니즘
var maxProfit = function (prices) {
  let pick = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (pick > prices[i]) {
      pick = prices[i];
      continue;
    }
    profit = Math.max(profit, prices[i] - pick);
  }

  return profit;
};

console.log(maxProfit(prices));
