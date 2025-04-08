// 1-3-2 패턴 있는지

const nums = [1, 0, 1, -4, -3]
// Output: true
// Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].

// 끝부터 내림차
var find132pattern = function (nums) {
    const n = nums.length
    const stack = []
    let max = -Infinity

    for (let i = n - 1; i >= 0; i--) {
        if (max > nums[i]) return true
        // max 가 순회 중에 현재 인덱스까지의 값중 두 번째로 큰 값 되게 해야함
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            max = stack.pop()
        }

        stack.push(nums[i])
    }

    return false
};

console.log(find132pattern(nums));