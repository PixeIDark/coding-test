// 자기 오른쪽에 몇명 보이는 지

const heights = [10, 6, 8, 5, 11, 9]
// Output: [3,1,2,1,1,0]
// Explanation:
// Person 0 can see person 1, 2, and 4.
// Person 1 can see person 2.
// Person 2 can see person 3 and 4.
// Person 3 can see person 4.
// Person 4 can see person 5.
// Person 5 can see no one since nobody is to the right of them.

// 안보이는 얘는 내림차 정렬인 순간. 즉 stack 의 마지막보다 num 이 작으면 끝.
// 오름차면 계속 잘보여 모든 스택들이
var canSeePersonsCount = function (heights) {
    const stack = []
    const result = Array(heights.length).fill(0)

    for (let i = heights.length - 1; i >= 0; i--) {
        let count = 0

        // stack = [9], i = 4, num = 11
        while (stack.length && stack[stack.length - 1] < heights[i]) {
            count++
            stack.pop()
        }

        if (stack.length) count++

        result[i] = count
        stack.push(heights[i])
    }

    return result
};

console.log(canSeePersonsCount(heights));