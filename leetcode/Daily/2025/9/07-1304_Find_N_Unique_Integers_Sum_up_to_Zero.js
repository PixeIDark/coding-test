// 고유한 정수 요소들의 합이 0이되는 length가 n 인 배열 반환
// 걍 n - 2 만큼 1234 하고, 마지막에 음수 주자
// 3분
var sumZero = function (n) {
    if (n === 1) return [0]

    const result = []
    let total = 0

    for (let i = 1; i < n; i++) {
        result.push(i)
        total += i
    }

    result.push(-total)

    return result
};