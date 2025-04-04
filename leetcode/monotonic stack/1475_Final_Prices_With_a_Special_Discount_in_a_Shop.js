// 현재 요소보다 작은 첫번째 다음 요소 찾아서 뺀값 반환

const prices = [1, 2, 3, 4, 5]
// Output: [4,2,4,2,3]
// Explanation:
// For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
// For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
// For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
// For items 3 and 4 you will not receive any discount at all.

//
var finalPrices = function (prices) {
    const stack = []
    const result = prices.slice()

    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
            result[stack[stack.length - 1]] = prices[stack[stack.length - 1]] - prices[i]
            stack.pop()
        }

        stack.push(i)
    }

    return result
};

console.log(finalPrices(prices))