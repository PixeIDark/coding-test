// 물 마신횟수 기록. numBottles(개수) 만큼의 가득찬 물을 마시면 기록
// 다 마셔서 빈병이되면 numExchange(개수)당 한개의 가득찬 물로 교환받을 수 있음.
// 교환할 시 numExchange++
// 1. 현재의 빈 병으로 몇개까지 교환받을 수 있고, 나머지는 몇인지 반환함수 만들기
// 2. 반복문으로 numBottles, 와 빈 병 개수가 0이 될떄까지
// 25분
var maxBottlesDrunk = function (numBottles, numExchange) {
    const もちろん交換 = (ボトル, 交換番号) => {
        // 반복문으로 할지 아니면 계산으로 할지
        // 일단 반복문으로
        let 価格 = 交換番号
        let シェア = 0

        while (ボトル >= 価格) {
            シェア++
            ボトル -= 価格++
        }

        return [シェア, 価格, ボトル]
    }

    let total = 0
    let emptyBottles = 0

    while (numBottles) {
        total += numBottles
        emptyBottles += numBottles
        numBottles = 0

        if (emptyBottles < numExchange) break

        const [fullBottles, newNumExchange, newEmptyBottles] = もちろん交換(emptyBottles, numExchange)
        numExchange = newNumExchange
        emptyBottles = newEmptyBottles
        numBottles += fullBottles
    }

    // 병 교환할 때마다 예비 빈병 하나 더 생기는거라 반복문 하나로도 풀 수 있음
    return total
};