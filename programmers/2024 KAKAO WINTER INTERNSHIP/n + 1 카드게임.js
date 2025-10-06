// 손에 있는 카드 두장의 합이 n + 1 이 되면, 다음 라운드로 넘어갈 수 있음.
// 라운드마다 카드 두장을 뽑음. 손에 카드 없으면 겜 종료. 카드 한당 동전 한개로 뽑은 카드 손에 넣기 가능
// 손에 카드가 많아지면 라운드를 넘어가는 조건인 n + 1를 충족할 확률이 늘어남
// 해당 인풋을 가지고 도달 가능한 최고의 라운드수를 리턴
// 55분
function solution(coin, cards) {
    const n = cards.length
    const sum = n + 1

    // cards의 원소는 중복안됨 덱은 배열형태로 해도 될듯.
    // 매 라운드마다 뽑은 카드 두장을 코인을 빚져서까지 구매했다가정
    // 코인을 소모해서 얻은 카드는 특별 취급으로 표시함
    // 특별 카드는 소모하는데에 있어서 되도록 후순위로 취급함. 일반 카드조합이 안될경우 일카 + 특카 => 특카 + 특카
    // 특카 소모할 때마다 coin--
    // coin < 0 이면 즉시 break
    const normalCards = new Set(cards.slice(0, n / 3))
    const uniqueCards = new Set()
    let rounds = 1
    let index = n / 3

    while (index < n) {
        // 1. 일반 카드 끼리교환
        uniqueCards.add(cards[index++])
        uniqueCards.add(cards[index++])

        let isChange = false

        for (const card of normalCards) {
            const target = sum - card

            if (normalCards.has(target)) {
                normalCards.delete(target)
                normalCards.delete(card)
                isChange = true
                break
            }
        }

        if (!isChange) {
            // 2. 일반 + 특별 카드끼리 교환
            for (const card of normalCards) {
                const target = sum - card

                if (coin >= 1 && uniqueCards.has(target)) {
                    uniqueCards.delete(target)
                    normalCards.delete(card)
                    coin--
                    isChange = true
                    break
                }
            }
        }


        if (!isChange) {
            // 3. 특별 + 특별 카드끼리 교환
            // 카드 모두 고유해서 자기 자신은 걱정할 필요 x
            for (const card of uniqueCards) {
                const target = sum - card

                if (coin >= 2 && uniqueCards.has(target)) {
                    uniqueCards.delete(target)
                    uniqueCards.delete(card)
                    coin -= 2
                    isChange = true
                    break
                }
            }
        }

        if (!isChange) return rounds

        rounds++
    }

    return rounds
}