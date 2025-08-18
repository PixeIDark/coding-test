// 요소끼리 사칙연산을 해서 24 되는지
// 요소는 무조건 4개, 요소 범위는 1 ~ 9
// 1. 요소끼리 사칙연산해서 모든 결과값 배열에 넣음 [1]인덱스에 사용한 인덱스를 넣음
// 2. 새로운 배열 내부에서 요소끼리 사칙연산.(2 - 2 만 가능 2 - 1, 3 - 1 고려해야함)
// 48분
var judgePoint24 = function (cards) {
    const double = []

    for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < cards.length; j++) {
            if (i === j) continue;

            double.push([cards[i] * cards[j], i, j])
            double.push([cards[i] / cards[j], i, j])
            double.push([cards[i] - cards[j], i, j])
            double.push([cards[i] + cards[j], i, j])
        }
    }

    // double 끼리 연산 => [1], [2] 가 서로 안겹쳐야됨
    for (let i = 0; i < double.length; i++) {
        for (let j = 0; j < double.length; j++) {
            if (i === j) continue;

            if (double[i][1] === double[j][1] || double[i][2] === double[j][2] || double[i][1] === double[j][2] || double[i][2] === double[j][1]) continue

            if (double[i][0] * double[j][0] === 24) return true
            if (double[i][0] / double[j][0] === 24) return true
            if (double[i][0] - double[j][0] === 24) return true
            if (double[i][0] + double[j][0] === 24) return true
        }
    }
    // double과 겹치지 않는 cards 요소와 연산후 푸시
    const triple = []

    for (let i = 0; i < double.length; i++) {
        for (let j = 0; j < cards.length; j++) {
            // 인덱스 겹치는지 필터

            if (double[i][1] === j || double[i][2] === j) continue

            triple.push([double[i][0] * cards[j], double[i][1], double[i][2], j])
            triple.push([double[i][0] / cards[j], double[i][1], double[i][2], j])
            triple.push([cards[j] / double[i][0], double[i][1], double[i][2], j])
            triple.push([double[i][0] - cards[j], double[i][1], double[i][2], j])
            triple.push([cards[j] - double[i][0], double[i][1], double[i][2], j])
            triple.push([double[i][0] + cards[j], double[i][1], double[i][2], j])
        }
    }


    for (let i = 0; i < triple.length; i++) {
        for (let j = 0; j < cards.length; j++) {
            // 인덱스 겹치는지 필터

            if (triple[i][1] === j || triple[i][2] === j || triple[i][3] === j) continue

            if (triple[i][0] * cards[j] === 24) return true
            if (triple[i][0] / cards[j] === 24) return true
            if (Math.round(cards[j] / triple[i][0]) === 24) return true
            if (triple[i][0] - cards[j] === 24) return true
            if (cards[j] - triple[i][0] === 24) return true
            if (triple[i][0] + cards[j] === 24) return true
        }
    }


    return false
};