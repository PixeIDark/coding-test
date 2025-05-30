// 최대 이익 구하기
// 여러 개를 사는것은 불가능. 수수료는 팔 때 발생함(살 때 생긴다 봐도 무방)
// n * n
// prices = [1,10,2,10,1,1], fee = 2, result = 13
// 계속 가져갈지 말지를 판단해야함
// 일단 팔앗다고 가정하고 값을 업데이트함
// 46분
var maxProfit = function (prices, fee) {
    let hold = -prices[0]
    let sold = 0

    for (const price of prices) {
        const newHold = Math.max(hold, sold - price)
        const newSold = Math.max(sold, hold + price - fee)

        hold = newHold
        sold = newSold
    }

    return sold
};