// 최대 너비 직사각형 반환

const heights = [2, 1, 5, 6, 2, 3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// 단조 오름차 정렬
// 스택 맨 끝보다 낮은 막대 나오면 맨 끝 막대로 너비 계산
var largestRectangleArea = function (heights) {
    const n = heights.length
    const stack = [-1]
    let result = 0

    for (let i = 0; i <= n; i++) {

        while (stack.length > 1 && (heights[stack[stack.length - 1]] > heights[i] || i === n)) {
            const height = heights[stack.pop()]
            const width = i - stack[stack.length - 1] - 1
            result = Math.max(result, height * width)
        }

        stack.push(i)
    }

    return result
};

console.log(largestRectangleArea(heights));