// [이모티콘 플러스 유저, 이모티콘 판매액]. [0] - [1] 우선순위 두었을 떄 최고점 반환
// user[0]: n % 이상 할인(1 ~ 40) 시 무지성으로 구매함, user[1]: n(100의 배수)이상 구입 시 구매를 모두 취소하고 플러스 유저가됨
// emoticon: 가격 (100의 배수)
// 40 ^ 7 * 100, 브루트 포스 노답..
// 4 ^ 7 * 100 (할인율이 10, 20, 30, 40임)
// 1. 할인 표를 만듬 ["10-20-40"] dfs 갈겨서하면됨
// 2. 반복문에서 할인 표 vs 유저로 리턴 값 고점 갱신하는식으로 ㄱㄱ
// 54분
function solution(users, emoticons) {
    const n = emoticons.length

    const getArr = () => {
        const stack = []

        const dfs = (arr) => {
            if (arr.length === n) {
                stack.push(arr)
                return
            }

            for (let i = 10; i <= 40; i += 10) {
                dfs([...arr, i])
            }
        }

        dfs([])

        return stack
    }

    let result = [0, 0]

    for (const discounts of getArr()) {
        let plus = 0
        let income = 0

        for (const [limit, okPlus] of users) {
            let total = 0

            for (let i = 0; i < discounts.length; i++) {
                if (limit <= discounts[i]) total += emoticons[i] * (100 - discounts[i]) / 100
            }

            if (total >= okPlus) plus++
            else income += total
        }

        if (result[0] < plus) {
            result[0] = plus
            result[1] = income
        } else if (result[0] === plus && result[1] < income) {
            result[1] = income
        }
    }

    return result
}
