// A 가 승리할 확률이 가장 높은 주사위 덱 반환

const dice = [[1, 2, 3, 4, 5, 6], [2, 2, 4, 4, 6, 6]]
// OutPut = [1, 4]

// 주사위 평균이 높다고 가정, 하나만 매우 높고 나머지는 매우 낮으면 평균이 높아도 승리할 확률이 낮은 주사위임
// 1. 승리할 확률이 높은 주사위를 구분하는 것 부터 시작해야함
// 우선 주사위 면의 값들을 모두 읽은 뒤 기록
// 주사위 요소들이 이제 각 몇번쨰로 높은지에 대해 점수로 주고, 이 점수의 평균 값이 높은 주사위가 좋은 주사위
// 2. 승리할 확률이 높은 순서대로 정렬 시 n/2 - 1 까지의 값을 반환하면 됨
function solution(dice) {
    // 시간 복잡도 고려 ㄴㄴ 이거 일일이 다 해봐야함
    // 0, 1 인덱스 A 2, 3 인덱스 B 라 가정하고 워게임 ㄱㄱ
    // 픽 인덱스 a, b, c 이면, 작은 순으로 정렬 후 문자열로 abc 저장 점수

    // 일단 주사위 덱 부터 만들어야해. 이것을 dfs 로 만들어보자
    // 덱 재귀 함수는 가능한 조합을 2차 배열 형식으로 반환해주는 역할
    const n = dice.length
    const half = n / 2

    // 조합 기준 n = 8, => 70 나옴. 최적화 개선여지 약간 있음
    const getDiceSets = () => {
        const result = []

        const createDiceSet = (curr, count, diceSet) => {
            if (count === half) {
                result.push(diceSet)
                return
            }

            for (let i = curr + 1; i < n; i++) {
                const nextDiceSet = [...diceSet, i]
                createDiceSet(i, count + 1, nextDiceSet)
            }

        }

        for (let i = 0; i <= half; i++) {
            createDiceSet(i, 1, [i])
        }

        return result
    }
    const diceSets = getDiceSets()
    // console.log(diceSets)
    // diceSets 의 set 을 통해 재귀 경로를 지정해주고, 숫자를 더해야함

    const diceCalculator = (diceSet) => {
        let result = new Map()

        const diceTotalSum = (curr, diceSet, sum) => {
            if (curr === diceSet.length) {
                // console.log(sum)
                // 이 최종값들을 배열에 저장해야해
                result.set(sum, (result.get(sum) ?? 0) + 1)
                return
            }

            const pickDice = dice[diceSet[curr]]

            for (const side of pickDice) {
                diceTotalSum(curr + 1, diceSet, sum + side)
            }

        }
        diceTotalSum(0, diceSet, 0)

        return result
    }

    // console.log(diceCalculator([0, 1, 2, 3]))
    // diceSets 순회 하면서 뽑은 모든 sum 값들을 sum.length * sum.length 시간복잡도로 검토해 상대와
    // 여기서 diceSet 마다 승패를 기록해
    // 덱을 서로 다르게 한상태에서 비교해야함

    const winRates = []

    for (let i = 0; i < diceSets.length; i++) {
        // 수의 조합중에는 중복된 숫자도 나온다 이것을 diceCalculator 에서 set 으로 처리해주자
        // 아니다 중복된 숫자가 몇개 나왔는지 카운트를 해주는 식으로 하고 비교해야해
        // 이것의 빈도를 통해 곱연산으로 빠르게 승패를 기록 가능
        // 절반만 검사해 그래서 결과에서 승률 높은순으로 정렬하고, Math.max(winRates[0], 1 - winRates[winRates.length - 1]) 비교 가장 승률이 높거나 낮은게 정답
        const setA = diceSets[i]
        const setB = []

        for (let i = 0; i < n; i++) if (setA.indexOf(i) === -1) setB.push(i)

        const sumsA = diceCalculator(setA)
        const sumsB = diceCalculator(setB)
        let win = 0
        let lose = 0
        let draw = 0

        for (const [sumA, countA] of sumsA) {
            for (const [sumB, countB] of sumsB) {
                const totalCount = countA * countB

                if (sumA > sumB) win += totalCount
                else if (sumA < sumB) lose += totalCount
                else draw += totalCount
            }
        }

        const totalBattle = win + lose + draw
        // 부동 소수점 주의
        const winRate = win / totalBattle
        winRates.push([setA, winRate])

    }
    winRates.sort((a, b) => b[1] - a[1])
    const result = winRates[0][0]

    return result.map(i => i + 1)
}

console.log(solution(dice))