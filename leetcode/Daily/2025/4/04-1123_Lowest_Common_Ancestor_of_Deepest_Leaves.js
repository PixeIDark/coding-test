// 가장 깊은 노드들의 가장 낮은 고통 조상 반환.

// const root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
// Output: [2,7,4]
// Explanation: We return the node with value 2, colored in yellow in the diagram.
// The nodes coloured in blue are the deepest leaf-nodes of the tree.
// Note that nodes 6, 0, and 8 are also leaf nodes, but the depth of them is 2, but the depth of nodes 7 and 4 is 3.

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(0)
root.left = new TreeNode(1)
root.right = new TreeNode(3)
root.left.left = new TreeNode(null)
root.left.right = new TreeNode(2)
// root.right.left = new TreeNode(0)
// root.right.right = new TreeNode(8)
// root.left.left.left = new TreeNode(null)
// root.left.left.right = new TreeNode(null)
// root.left.right.left = new TreeNode(7)
// root.left.right.right = new TreeNode(4)
// bfs 로 순회하면서 가장 깊은 노드들 찾아야함
var lcaDeepestLeaves = function (root) {
    // 닥치고 dfs 로 순회해서 레벨을 인덱스로 해서 중첩 배열형식으로 노드들 다 집어넣는다. null 이여도 걍 넣어라
    // 최대레벨 인덱스의 처음과 끝 인덱스 사이의 거리를 토대로 공통 조상 레벨을 추론할 수 있다.
    const arr = Array.from({length: 50}, () => [])
    const arr2 = Array.from({length: 50}, () => [])
    let maxDepth = 0

    const dfs = (node, parent, depth) => {
        if (node?.val === undefined || node?.val === null) return

        arr[depth].push([parent, node.val])
        arr2[depth].push(node.val)
        maxDepth = Math.max(maxDepth, depth)
        dfs(node.left, arr[depth].length - 1, depth + 1)
        dfs(node.right, arr[depth].length - 1, depth + 1)
    }
    dfs(root, -1, 0)
    // 푸시할 때 지 부모의 인덱스를 앞에 붙이고 뒤에 자기 val 를 넣자

    let first = arr[maxDepth][0]
    let last = arr[maxDepth][arr[maxDepth].length - 1]
    if (first === last) return [first[1]]

    let result = arr2[maxDepth]

    while (first[0] !== last[0]) {
        maxDepth--
        first = arr[maxDepth][first[0]]
        last = arr[maxDepth][last[0]]
    }
    result.unshift(arr[maxDepth - 1][first[0]][1])

    return result
};

var lcaDeepestLeaves = function (root) {
    const dfs = (node) => {
        if (!node) return [0, null]

        if (!node.left && !node.right) return [1, node]

        const [leftDepth, leftNode] = dfs(node.left)
        const [rightDepth, rightNode] = dfs(node.right)

        if (leftDepth > rightDepth) return [leftDepth + 1, leftNode]

        if (rightDepth > leftDepth) return [rightDepth + 1, rightNode]

        return [leftDepth + 1, node]
    }

    const [_, result] = dfs(root)
    return result
}
console.log(lcaDeepestLeaves(root));