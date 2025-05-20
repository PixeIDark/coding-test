// 가장 긴 지그재그 길이 반환

// Input: root = [1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1]
// Output: 3
// Explanation: Longest ZigZag path in blue nodes (right -> left -> right).

// 방향을 매개변수로 가지고 오고 반대 방향의 dfs 로가면 +2 로 시작함
// 17분
var longestZigZag = function (root) {
    let max = 0

    const dfs = (node, prev, count) => {
        if (!node) return

        const countL = prev === "left" ? 1 : count + 1
        const countR = prev === "right" ? 1 : count + 1

        dfs(node.left, "left", countL)
        dfs(node.right, "right", countR)

        max = Math.max(max, count)
    }

    dfs(root, "none", 0)

    return max
};