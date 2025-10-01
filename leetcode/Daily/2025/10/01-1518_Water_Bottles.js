// 가득찬 상태: A, 비워진 상태: B
// A의 개수만큼 total에 더하고, A => B 
// B / numExchange => A 로 치환되고 나머지는 여전히 B 
// 변수하나에 나머지 계속 담아서 
// 19분
var numWaterBottles = function (numBottles, numExchange) {
    let trash = 0
    let total = 0

    while (numBottles) {
        total += numBottles
        trash += numBottles
        numBottles = Math.floor(trash / numExchange)
        trash = trash % numExchange
    }

    return total
};