// 방향 그래프 따라가면서 가장 등장 빈도가 높은 색깔 빈도 반환. 싸이클이면 -1

const colors = "abaca",
    edges = [[0, 1], [0, 2], [2, 3], [3, 4]]
// Output: 3
// Explanation: The path 0 -> 2 -> 3 -> 4 contains 3 nodes that are colored "a" (red in the above image).

// 싸이클인지를 먼저 알아낼 수 있어야함 => 반복문 블럭 vis 에 넣고 또 등장하는 경우 싸이클임
// 싸이클이 아닌경우: 해시 맵에 (color) => count 저장하고 get 을 통해 maxCount 를 업데이트해줌
// 83분
var largestPathValue = function (colors, edges) {
    const n = colors.length
    const graph = Array.from({length: n}, () => [])
    const inDegree = Array(n).fill(0)

    for (const [start, end] of edges) {
        graph[start].push(end)
        inDegree[end]++
    }

    const queue = []

    for (let i = 0; i < n; i++) {
        if (!inDegree[i]) queue.push(i)
    }

    const dp = Array.from({length: n}, () => Array(26).fill(0))
    let maxCount = 0
    let proceed = 0

    while (queue.length) {
        const curr = queue.shift()
        proceed++

        // 색과 최대 값 없데이트
        const currColor = colors[curr].charCodeAt(0) - 97
        dp[curr][currColor] = Math.max(dp[curr][currColor], 1)
        maxCount = Math.max(maxCount, dp[curr][currColor])

        for (const next of graph[curr]) {
            const nextColor = colors[next].charCodeAt(0) - 97

            for (let i = 0; i < 26; i++) {
                if (i === nextColor) dp[next][i] = Math.max(dp[next][i], dp[curr][i] + 1)
                else dp[next][i] = Math.max(dp[next][i], dp[curr][i])
            }

            inDegree[next]--
            if (inDegree[next] === 0) queue.push(next)
        }

    }

    // 사이클 처리 해야함
    if (proceed !== n) return -1

    return maxCount
};


// var largestPathValue = function (colors, edges) {
//     const n = colors.length;
//     const graph = Array.from({length: n}, () => [])
//     const vis = new Set()
//     // 위상 정렬
//
//     const dp = Array.from({length: n}, () => Array(26).fill(0))
//
//     for (const [start, end] of edges) {
//         graph[start].push(end)
//     }
//
//     let maxCount = 0
//     let isCycle = false
//
//     const dfs = (curr, cycles) => {
//         if (cycles.has(curr)) {
//             isCycle = true
//             return
//         }
//
//         vis.add(curr)
//         cycles.add(curr)
//         const key = colors[curr].charCodeAt(0) - 97
//         maxCount = Math.max(maxCount, ++dp[curr][key])
//
//         for (const next of graph[curr]) {
//             const nextKey = colors[next].charCodeAt(0) - 97
//             for (let color = 0; color < 26; color++) {
//                 if (color === nextKey) {
//                     dp[next][color] = Math.max(dp[next][color], dp[curr][color] + 1)
//                 } else {
//                     dp[next][color] = Math.max(dp[next][color], dp[curr][color])
//                 }
//             }
//         }
//
//         cycles.delete(curr)
//     }
//
//     for (let i = 0; i < n; i++) {
//         if (vis.has(i)) continue
//         dfs(i, new Set())
//         if (isCycle) return -1
//     }
//
//     return maxCount
// };

console.log(largestPathValue(colors, edges))