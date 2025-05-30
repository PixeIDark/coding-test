// 두 노드 간선중 가장 가까운 노드 출력 중복이면 가장 낮은 노드, 사이클 존재

const edges = [4, 3, 0, 5, 3, -1], node1 = 4, node2 = 0
// Output: 2
// Explanation: The distance from node 0 to node 2 is 1, and the distance from node 1 to node 2 is 1.
// The maximum of those two distances is 1. It can be proven that we cannot get a node with a smaller maximum distance than 1, so we return node 2.

// 4분 이해하는데에
// 인덱스가 입구 노드 요소는 출구 노드
// node1 로 순회 후 기록 set 에 다가
// node2 로 순회하면서 set 조회함
// 벽
var closestMeetingNode = function (edges, node1, node2) {
    // edges = [2, 0, 0], node1 = 2, node2 = 0
    // 2,와 0 이 정답이 될수 있지만 더 작은 0 이 정답
    const dfs = (curr, vis) => {
        vis.add(curr)

        if (edges[curr] !== undefined && !vis.has(edges[curr])) return dfs(edges[curr], vis)
        else return [...vis]
    }

    const graph1 = dfs(node1, new Set())
    const graph2 = dfs(node2, new Set())

    console.log(graph1, graph2)
    // 포문으로 서로 크로스 하고 뎁스마다 값을 저장함
    // 인덱스가 거리, 요소가 노드

    //[[node, node], [node,node,node.node], [node]]
    // 가장 작은 인덱스를 솔트해서 정답 반환
    const arr = Array.from({length: edges.length}, () => [])

    for (let i = 0; i < graph1.length; i++) {
        for (let j = 0; j < graph2.length; j++) {
            if (graph1[i] === graph2[j]) arr[j].push(graph1[i])
            if (graph1[j] === graph2[i]) arr[i].push(graph2[j])
        }
    }

    for (let i = 0; i < graph1.length; i++) {
        for (let j = 0; j < graph2.length; j++) {
            if (graph2[i] === graph1[j]) arr[j].push(graph2[i])
        }
    }

    let result = 0

    for (const a of arr) {
        if (a.length) {
            result = Math.min(a[0], a[1] ?? Infinity)
            break
        }
    }
    console.log(arr)
    return result
};

console.log(closestMeetingNode(edges, node1, node2))