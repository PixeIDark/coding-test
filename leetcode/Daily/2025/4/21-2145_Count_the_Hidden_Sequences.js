// 숨겨진 시퀸스의 개수를 반환

const differences = [4, -7, 2], lower = 3, upper = 6
// Output: 4
// Explanation: The possible hidden sequences are:
//     - [-3, 0, -4, 1, 2, 0]
//     - [-2, 1, -3, 2, 3, 1]
//     - [-1, 2, -2, 3, 4, 2]
//     - [0, 3, -1, 4, 5, 3]
// Thus, we return 4.
// differences[i] = hidden[i + 1] - hidden[i]

// differences[i] 절대 값으로 만들고 이게 upper - lower 의 절대 값보다 크면 시퀸스가 없는 거임
// 절대 값이 큰 친구부터 우선 적으로 만들어야해
var numberOfArrays = function (differences, lower, upper) {
    const hidden = Array(differences.length + 1).fill(0)
    const canDifference = upper - lower
    let max = 0
    let min = 0

    // 이럼 안되고 가상의 시퀸스를 하나 만들어서 최대값과 최소값의 차이를 가지고 비교해야해
    // hidden[i + 1] = differences[i] + hidden[i]
    differences.forEach((d, i) => {
        hidden[i + 1] = differences[i] + hidden[i]
        max = Math.max(max, hidden[i + 1])
        min = Math.min(min, hidden[i + 1])
        if (max - min > canDifference) return 0
    })

    const result = canDifference - (max - min) + 1

    return result < 0 ? 0 : result
};

console.log(numberOfArrays(differences, lower, upper))