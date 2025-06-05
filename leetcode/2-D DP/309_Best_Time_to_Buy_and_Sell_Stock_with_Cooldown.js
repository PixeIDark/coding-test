// 최적의 손절로 이익 극대화 하루 쿨있음

const prices = [1, 2, 3, 0, 2];
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]

// 2차원 dp 만들어서 ㄱㄱ
// 팔면 하루 쿨 있음
// 복수
// 8분
var maxProfit = function (prices) {
    let hold = -prices[0]
    let sold = 0
    let cool = 0

    for (let i = 1; i < prices.length; i++) {
        const newHold = Math.max(hold, cool - prices[i])
        const newSold = hold + prices[i]
        const newCool = Math.max(cool, sold)

        hold = newHold;
        sold = newSold;
        cool = newCool;
    }

    return Math.max(sold, cool)
};

console.log(maxProfit(prices));
