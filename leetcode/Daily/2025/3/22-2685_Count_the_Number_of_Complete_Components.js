// 두 꼭짓점 사이에 선이 있어야함 그러면 카운트 +1

const n = 6, edges = [[0, 1], [0, 2], [1, 2], [3, 4]]
// Output: 3
// Explanation: From the picture above, one can see that all of the components of this graph are complete.
// 0 <= edges.length <= n * (n - 1) / 2

// 싸이클이 아님. 꼭짓점 사이에 모두 연결이 되어있어야함. 싸이클보다 더함
// 혼자있거나 엣지에 한번씩만 등장하는 쌍은 조건 충족함
// 각 꼭짓점 개수 -1 개의 선이 연결되어있어야함 ex) 4개면 꼭짓점마다 3개의 경로가 존재해야함.
// 각 노드 별로 연결된 노드를 보여주는 그래프를 만들어우선
var countCompleteComponents = function (n, edges) {
    const graph = Array.from({length: n}, () => [])
    edges.forEach(([start, end]) => {
        graph[start].push(end)
        graph[end].push(start)
    })
    const globalVis = Array(n).fill(false);

    // [ [ 1, 2 ], [ 0, 2 ], [ 0, 1 ], [ 4 ], [ 3 ], [] ]
    // 인덱스별로 갈수 있는 경로를 추척해보고, 경로를 추적할때 0인데스 부터 시작한다 치면 0에서 갈수 있는 경로인
    // 1,2 를 탐색해야함 대신 1을 탐색하러 갈땐 2를 가지고가고, 1을 현재위치의 인덱스로 교환. 즉, [0,2] 인덱스를 가지고
    // 1번 인덱스를 탐색해서 [0,2]를 가졌나 확인. length 가 n-1이 아니면 즉시 종료
    // vis 를 가지고 다니면서 이전에 왔던 경로는 탐색하지 않음 dfs 해라
    // 포문에서 시작하는데, 글로벌 vis 만들어서 탐색한곳은 시작경로로 삼지하지않고 생략
    const dfs = (curr, nodes, vis) => {
        // 재방문하면 뭐가 불리언이아니라 정보를 반환해줘야할 거 같음
        if (vis[curr]) return true
        vis[curr] = true
        globalVis[curr] = true

        nodes.delete(curr)
        if (graph[curr].length !== nodes.size) return false
        nodes.add(curr)

        for (const next of graph[curr]) {
            if (!nodes.has(next)) return false

            if (!dfs(next, nodes, vis)) return false
        }

        return true
    }

    let result = 0

    for (let i = 0; i < graph.length; i++) {
        if (!graph[i].length) {
            result++
            continue
        }

        if (globalVis[i]) continue
        else if (dfs(i, new Set(graph[i]), Array(n).fill(false))) result++
    }


    return result
};

// 캬 원트성공 이거지!
console.log(countCompleteComponents(n, edges))