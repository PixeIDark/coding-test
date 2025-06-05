// 자기자신 기본값 1 에서 현재날짜보다 엄격히 작은 날짜마다 카운팅
// 스택에 넣는다 내림차순 기본으로
// 마지막 값보다 큰게 나올 경우 위치 교환, count++

// 오름차순으로 하면 나보다 작은 얘가 나올 경우, 역시 위치 바꿈 ㅋ
// 근데 바꾸고나서 현재의 인덱스 + 1 반환하면됨바로 length -1 인덱스보다 length -2 인덱스가 엄격히 작을 경우에만 바꿔야함
// [100] => [100, 80] => [100, 80, 60] => [100, 80, 60,]vs 70
// 엉터리 이론들임 연속적으로 주식이 낮거나 같냐를 보는거임
// 24분
var StockSpanner = function() {
    this.stack = [];
    this.map = new Map()
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    const n = this.stack.length
    let value = 1

    while(this.stack[this.stack.length - 1] <= price) {
        const key = this.stack.pop()
        value += this.map.get(key)
    }

    this.stack.push(price)
    this.map.set(price, value)

    return value
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */