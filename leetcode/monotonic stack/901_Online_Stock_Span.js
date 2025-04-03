// 클래스 잘 만들어서 주자

// Input ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
//       [[], [100], [80], [60], [70], [60], [75], [85]]
// Output [null, 1, 1, 1, 2, 1, 4, 6]
// Explanation
// StockSpanner stockSpanner = new StockSpanner();
// stockSpanner.next(100); // return 1
// stockSpanner.next(80);  // return 1
// stockSpanner.next(60);  // return 1
// stockSpanner.next(70);  // return 2
// stockSpanner.next(60);  // return 1
// stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
// stockSpanner.next(85);  // return 6

// 배열에 모든 값을 처넣고 next 할때는 잽싸게 모노토닉 스택 돌려서 length 값을 반환하자.
var StockSpanner = function () {
    this.stack = []
    this.dp = []
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    this.stack.push(price)
    this.dp.push(1)

    if (this.stack.length >= 2 && this.stack[this.stack.length - 1] < this.stack[this.stack.length - 2]) this.dp[this.dp.length - 1] += this.dp[this.dp.length - 2]
};
// 이거 지금 절대 못품 ㅈㅈ
/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */