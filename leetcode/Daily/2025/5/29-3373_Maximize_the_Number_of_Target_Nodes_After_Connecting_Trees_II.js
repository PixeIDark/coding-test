// 노드 연결해서 간선 짝수면 카운팅 최대 값 반환

const edges1 = [[2, 1], [7, 3], [0, 4], [7, 5], [2, 6], [0, 2], [0, 7]],
    edges2 = [[3, 0], [1, 2], [5, 1], [6, 3], [9, 4], [5, 6], [7, 5], [9, 7], [8, 9]]
// Output: [8,7,7,8,8]
// Explanation:
//     For i = 0, connect node 0 from the first tree to node 0 from the second tree.
//     For i = 1, connect node 1 from the first tree to node 4 from the second tree.
//     For i = 2, connect node 2 from the first tree to node 7 from the second tree.
//     For i = 3, connect node 3 from the first tree to node 0 from the second tree.
//     For i = 4, connect node 4 from the first tree to node 4 from the second tree.

// 첫번쨰 노드는 각 위치에서 짝수 거리에 있는 얘들의 개수를 카운팅
// 두번쨰 노드는 각 위치에서 홀수 거리에 있는 애들의 개수를 카운팅
// 첫번째 노드 개수 + 두번째 노드 최대 개수 반환
// 엣지에서 처음에 색을 검정으로 설정 다음 색으로 넘어가면 빨강
// 빨강에서 다음색은 검정으로
// 검정과 빨강의 개수를 기록하고, 노드가 무슨색인지도 기록해놓음
// 노드의 색깔에 따라 개수를 출력해서 구하면됨
// 0은 검정 1는 빨강
// edge1 에서 선택 노드가 빨강이면 edge2에서는 최대값임
// 58분
var maxTargetNodes = function (edges1, edges2) {
    const countNodes = (edges) => {
        const counts = [0, 0]
        const n = edges.length
        const colors = Array(n + 1).fill(0)
        const graph = Array.from({length: n + 1}, () => [])

        for (const [start, end] of edges) {
            graph[start].push(end)
            graph[end].push(start)
        }

        const dfs = (curr, parent) => {
            for (const next of graph[curr]) {
                if (next === parent) continue
                colors[next] = 1 - colors[curr]
                dfs(next, curr)
            }
        }

        dfs(0, -1)

        for (const color of colors) {
            counts[color]++
        }

        return {colors, counts}
    }

    const a = countNodes(edges1)
    const b = countNodes(edges2)
    const max = Math.max(...b.counts)
    const result = []

    for (const color of a.colors) {
        result.push(a.counts[color] + max)
    }

    return result
};

console.log(maxTargetNodes(edges1, edges2))