// 더 높은 온도 얻을려면 몇 일 기다려야하는지

const temperatures = [30, 40, 50, 60]
// Output: [1,1,4,2,1,1,0,0]

// 내림차순으로 스택 정렬
// 스택 마지막보다 큰놈 나오면 바로 교체
var dailyTemperatures = function (temperatures) {
    const stack = []
    const result = Array(temperatures.length).fill(0)

    for (let i = 0; i < temperatures.length; i++) {

        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const lastIdx = stack.pop()
            result[lastIdx] = i - lastIdx
        }

        stack.push(i)
    }

    return result
};

console.log(dailyTemperatures(temperatures));