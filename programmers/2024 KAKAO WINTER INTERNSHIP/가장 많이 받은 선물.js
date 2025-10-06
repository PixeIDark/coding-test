// 1. 친구끼리 주고받음에있어서 적게 받은쪽이 다음달에 선물 받게됨
// 2. 전체적인 거. 선물지수개념으로, 내가 준 선물의 개수 - 선물 받은 개수. 선물지수 높은 쪽이 더 받음. 1번 판정이 무효가 되면 이 때 2번 판정을 하는거임 2번 판정도 무효면 걍 넘어감
// 가장 많이 받을 친구가 받을 선물의 수 리턴
// map = { (muzi) => {(ryan) => 0(선물줌)}, {(frodo) => -2(선물받음)}}
// 양수면 준게 더 많고 음수면 받은게 더 많게 하자
// obj = { muzi : -3 } 받은게 많음
// 60분
function solution(friends, gifts) {
    const giftMap = {}
    const giftRank = new Map()
    gifts = gifts.map((a) => a.split(" "))
    const result = new Map()

    for (const A of friends) {
        if (!giftMap[A]) giftMap[A] = {}

        for (const B of friends) {
            if (A === B) continue
            giftMap[A][B] = 0
        }
    }

    for (const [A, B] of gifts) {
        // A: 선물을 줌 , B: 선물을 받음 \
        giftMap[A][B]++
        giftMap[B][A]--

        giftRank.set(A, (giftRank.get(A) ?? 0) + 1)
        giftRank.set(B, (giftRank.get(B) ?? 0) - 1)
    }

    for (const A of friends) {
        for (const B in giftMap[A]) {
            // 양수면 다음달에 받기
            const value = giftMap[A][B]

            if (value > 0) result.set(A, (result.get(A) ?? 0) + 1)

            if (value === 0) {
                const valueA = giftRank.get(A) ?? 0
                const valueB = giftRank.get(B) ?? 0

                if (valueA > valueB) result.set(A, (result.get(A) ?? 0) + 1)
            }
        }
    }

    return Math.max(...result.values(), 0)
}