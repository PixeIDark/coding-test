// 최소비용 얼마인지 간선 이동시, 이동 불가능하면 -1

const n = 5, edges = [[0, 1, 7], [1, 3, 7], [1, 2, 1]], query = [[0, 3], [3, 4]]
// Output: [1,-1]

// 단순히 노드를 이동하는게 아니라 가중치를 앤드해서 최소 값을 만들고 도달할수 있는 경우 구해야함 (0)
// 엣지를 우선 보기좋게 정리해아함
// 출발 노드를 인덱스, 도착 노드를 [0], 가중치는 [1]
var minimumCost = function (n, edges, query) {
    const graph = Array.from({length: n}, () => [])
    const weights = Array(n).fill(-1)

    // 가중치를 노드에 걍 심어버리면됨. 어차피 탐색 많이하면 이득임.
    for (const [start, end, weight] of edges) {
        graph[start].push(end)
        weights[start] &= weight
        graph[end].push(start)
        weights[end] &= weight
    }
    // 쿼리[0]. 시작 경로에서 갈수있는 모든 노드들의 가중치를 앤드연산하면돼, 경로중 쿼리[1] 이없으면 -1 조기 종료
    // dfs로 graph 탐색 선택지중 모든 경로 탐색 중복 방문 불가.

    let cost = -1
    let isPath = false
    const dfs = (curr, end, vis) => {
        cost &= weights[curr]
        vis.add(curr)

        if (curr === end) isPath = true

        for (const next of graph[curr]) {
            if (next === undefined || vis.has(next)) continue

            dfs(next, end, vis)
        }

    }

    const result = []

    for (const [start, end] of query) {
        if (start === end) {
            result.push(0)
            continue
        }
        cost = -1
        isPath = false
        dfs(start, end, new Set())
        if (isPath) result.push(cost)
        else result.push(-1)
    }

    // 타임리밋.. 유니온 파인드 ㄱㄱ
    return result
};


console.log(minimumCost(n, edges, query));

