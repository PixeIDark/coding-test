// 토끼의 최소 수

const answers = [1, 0, 1, 0, 0]
// Output: 5
// Explanation:
//     The two rabbits that answered "1" could both be the same color, say red.
//     The rabbit that answered "2" can't be red or the answers would be inconsistent.
// Say the rabbit that answered "2" was blue.
//     Then there should be 2 other blue rabbits in the forest that didn't answer into the array.
// The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn't.

// 긍정회로로 보면 토끼가 최소 수임. 3이라 말한 토끼가 네 마리면 서로가 서로를 지목한다고 가정
// answers 요소값이 다른 경우 색이 다름
// 3이라 외친 토끼가 5마리가 되면 4가 아니라 8을 더해야함
var numRabbits = function (answers) {
    let result = 0
    const map = new Map()
    answers.forEach(answer => {
        const rabbit = answer + 1
        const value = (map.get(rabbit) ?? 0) + 1
        if (value === 1) result += rabbit

        map.set(rabbit, value)
        if (value > rabbit) {
            result += rabbit
            map.set(rabbit, value - rabbit)
        }
    })

    return result
};

console.log(numRabbits(answers))