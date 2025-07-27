// 전보다 작으면 계곡, 높으면 언덕임
// 처음과 마지막은 판정 x
// 일단 연속적으로 된 애들은 하나로 해줘야함
// 7분
var countHillValley = function (nums) {
    const stack = []

    for (const num of nums) {
        if (stack[stack.length - 1] !== num) stack.push(num)
    }

    let result = 0

    for (let i = 1; i < stack.length - 1; i++) {
        if (stack[i] > stack[i - 1] && stack[i] > stack[i + 1] || stack[i] < stack[i - 1] && stack[i] < stack[i + 1]) result++
    }

    return result
};