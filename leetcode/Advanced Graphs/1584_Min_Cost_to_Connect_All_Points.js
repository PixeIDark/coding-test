// 한붓 그리기

const points = [
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
];
// Output: 20
// Explanation: We can connect the points as shown above to get the minimum cost of 20.
// Notice that there is a unique path between every pair of points.

// 일단 가장 가까운 것들끼리 이어준다음에 마지막 점은 연결하지 마셈.
// 동빈좌 강의 보고 이해해서 코드 적어서 풀기
var minCostConnectPoints = function (points) {
    const n = points.length

    // 모든 간선 만들기
    const graph = []

    for (let i = 0; i < n - 1; i++) {
        const [a, b] = points[i]

        for (let j = i + 1; j < n; j++) {
            const [c, d] = points[j]
            const diff = Math.abs(a - c) + Math.abs(b - d)

            graph.push([i, j, diff])
        }
    }

    graph.sort((a, b) => a[2] - b[2])

    const find = (parent, curr) => {
        if (parent[curr] === curr) return curr
        return parent[curr] = find(parent, parent[curr])
    }

    const parent = Array.from({length: n}, (_, i) => i)
    const rank = Array(n).fill(0)

    const union = (parent, a, b) => {
        a = find(parent, a)
        b = find(parent, b)
        console.log(a, b)
        if (a === b) return false

        if (rank[a] < rank[b]) parent[a] = parent[b]
        else if (rank[a] > rank[b]) parent[b] = parent[a]
        else {
            parent[a] = parent[b]
            rank[a]++
        }

        return true
    }

    let result = 0

    for (const [a, b, value] of graph) {
        if (union(parent, a, b)) {
            result += value
        }
    }

    return result
};

console.log(minCostConnectPoints(points));
