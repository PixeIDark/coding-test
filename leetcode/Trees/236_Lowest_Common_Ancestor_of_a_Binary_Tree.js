// p, q 의 최소 공통 조상 val 반환

const root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

// 1. 지나온 val 을 배열에 담음 p 만난순간 arrP 반환, 이걸로 서로 대조해봄 <= 문자열이 더 나을 수 있음
// 2. 만나면은 바로 반환해줘서 부모에게 정보 전달한 양 dfs 의 반환 값이 존재하는 dfs 면 이 노드의 val 이 정답
// 76분
var lowestCommonAncestor = function (root, p, q) {
    let result = null

    const dfs = (node) => {
        // 뭘찾았는지에 따라 숫자로
        // 아무것도 못찾으면 0 p 만찾으면 1 q만 찾으면 2 둘 다 찾으면 3
        if (!node) return 0

        let curr = 0
        if (node.val === p.val) curr = 1
        if (node.val === q.val) curr = 2

        const left = dfs(node.left)
        const right = dfs(node.right)

        if (curr + left + right === 3 && result === null) {
            result = node
        }

        return curr
    }

    dfs(root)

    return result

};