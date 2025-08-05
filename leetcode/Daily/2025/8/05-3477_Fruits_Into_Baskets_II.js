// 바구니에 과일을 담을 수 있으면 가장 왼쪽 바구니 우선순위로 담아야함
// 담을 수 없는 과일의 종류 개수 반환
// 1. 바구니 왼쪽 부터 탐색해서 플루잇 되면 바로 넣고 정지, set에 넣어서 인덱스 관리
// 13분
var numOfUnplacedFruits = function (fruits, baskets) {
    const set = new Set();

    for (const fruit of fruits) {
        for (let i = 0; i < baskets.length; i++) {
            const basket = baskets[i];

            if (set.has(i)) continue;

            if (fruit <= basket) {
                set.add(i);
                break;
            }
        }
    }

    return fruits.length - set.size;
};