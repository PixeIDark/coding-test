// 합이 가장큰 최소 레벨

const root = [1, 7, 0, 7, -8, null, null]
// Output: 2
// Explanation:
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.

// bfs 순회 현재의 max 값보다 크면 level 에 저장해줌 max 값 갱신도
// 32분
var maxLevelSum = function (root) {
    const queue = [root]
    let max = -Infinity
    let maxLevel = 0
    let sum = 0
    let level = 1

    while (queue.length) {
        const n = queue.length

        for (let i = 0; i < n; i++) {
            const node = queue.shift()

            sum += node.val

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        if (sum > max) {
            max = sum
            maxLevel = level
        }

        sum = 0
        level++
    }


    return maxLevel
};