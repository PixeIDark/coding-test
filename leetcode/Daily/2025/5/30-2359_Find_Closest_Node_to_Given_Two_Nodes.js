// 두 노드 간선중 가장 가까운 노드 출력 중복이면 가장 낮은 노드, 사이클 존재

const edges = [2, 2, 3, -1], node1 = 0, node2 = 1
// Output: 2
// Explanation: The distance from node 0 to node 2 is 1, and the distance from node 1 to node 2 is 1.
// The maximum of those two distances is 1. It can be proven that we cannot get a node with a smaller maximum distance than 1, so we return node 2.

// 4분 이해하는데에
// 인덱스가 입구 노드 요소는 출구 노드
// node1 로 순회 후 기록 set 에 다가
// node2 로 순회하면서 set 조회함
// 벽
var closestMeetingNode = function (edges, node1, node2) {
    // 시작 노드에서 떨어진 거리를 측정
    // 인덱스는 노드 요소는 거리

    const getDistance = (edges, node) => {
        const distances = Array(edges.length).fill(-1)
        let distance = 0
        let curr = node

        while (curr !== -1 && distances[curr] === -1) {
            distances[curr] = distance++
            curr = edges[curr]
        }

        return distances
    }

    const a = getDistance(edges, node1)
    const b = getDistance(edges, node2)

    // 거리 끼리 비교해서 값 구함
    let min = Infinity
    let result = -1

    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1 || b[i] === -1) continue
        const max = Math.max(a[i], b[i])

        if (max < min || max === min && i < result) {
            min = max
            result = i
        }
    }

    return result
};

console.log(closestMeetingNode(edges, node1, node2))