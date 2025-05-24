// 0 으로 이어지게 간선 수정하기 최소로, 수정한 횟수 반환

const n = 6, connections = [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]
// Output: 3
// Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).

// 재정렬 시 0 에 도달하는 거 보장됨
// 두 도시는 오직 하나의 길로만 이루어짐
// [0] start [1] end  이 두개를 바꾸는 거임
// 0 이랑 관계된 노드에서 탐색 시작
// [0, 1] [1, 2] [2, 3] [3, 0]
// 30분
var minReorder = function (n, connections) {
    // end 가 0 쪽이면 올바른놈 아니면 아님
    let result = 0
    let stack = []
    const dp = Array(n).fill(false)
    dp[0] = true

    while (connections.length) {
        const [start, end] = connections.pop()

        if (dp[end]) dp[start] = true
        else if (dp[start]) {
            dp[end] = true
            result++
        } else stack.push([start, end])

        if (!connections.length) {
            connections = [...stack]
            stack = []
        }
    }

    return result
};

// var minReorder = function (n, connections) {
//     // 상호 연결 인덱스는 스타트 요소는 엔드
//     const graph = Array.from({length: n}, () => [])
//     // 방향 정위를 위해 객체에 저장
//     const dirs = new Set()
//
//     for (const [start, end] of connections) {
//         graph[start].push(end)
//         graph[end].push(start)
//         dirs.add(`${start}-${end}`)
//     }
//
//     const vis = new Set()
//     let result = 0
//     // graph[0] 부터 dfs 하면서 해당 방향이 dirs 에 포함되는지 여부 확인 없으면 카운트
//     const dfs = (curr) => {
//
//         vis.add(curr)
//
//         for (const next of graph[curr]) {
//             if (vis.has(next)) continue
//             if (dirs.has(`${curr}-${next}`)) result++
//
//             dfs(next)
//         }
//
//     }
//
//     dfs(0)
//
//     return result
// };
console.log(minReorder(n, connections))