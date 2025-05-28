// 최선으로 두번째 트리로 연결해서 k 범위내의 노드 수 찾기

const edges1 = [[0, 1], [0, 2], [2, 3], [2, 4]], edges2 = [[0, 1], [0, 2], [0, 3], [2, 7], [1, 4], [4, 5], [4, 6]],
    k = 2
// Output: [9,7,9,8,8]
// Explanation:
//     For i = 0, connect node 0 from the first tree to node 0 from the second tree.
//     For i = 1, connect node 1 from the first tree to node 0 from the second tree.
//     For i = 2, connect node 2 from the first tree to node 4 from the second tree.
//     For i = 3, connect node 3 from the first tree to node 4 from the second tree.
//     For i = 4, connect node 4 from the first tree to node 4 from the second tree.

// 두번째 트리의 각 노드가 k - 1 이하의 범위에서 도달할 수 있는 노드의 개수를(자신 포함) 저장함
// 첫번째 트리의 각 노드는 k 이하의 범위로
// 무향 그래프로 만들고 각 노드에서 시작을 해보는거임
// 21분
var maxTargetNodes = function (edges1, edges2, k) {
    const countNode = (edges) => {
        const graph = Array.from({length: edges.length + 1}, () => [])

        for (const [start, end] of edges) {
            graph[start].push(end)
            graph[end].push(start)
        }

        let count = 0

        const dfs = (curr, vis, distance) => {
            if (distance > k) return

            if (vis.has(curr)) return

            count++
            vis.add(curr)

            for (const next of graph[curr]) {
                dfs(next, vis, distance + 1)
            }
        }

        const arr = []

        for (let i = 0; i < graph.length; i++) {
            count = 0
            dfs(i, new Set(), 0)
            arr.push(count)
        }

        return arr
    }

    const a = countNode(edges1)
    k--
    const b = countNode(edges2)
    const max = Math.max(...b)
    const result = []

    for (const count of a) {
        result.push(count + max)
    }

    return result
};

console.log(maxTargetNodes(edges1, edges2, k))