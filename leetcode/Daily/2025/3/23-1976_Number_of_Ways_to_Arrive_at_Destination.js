// 가장 짧은 시간으로 도착할수 있는 방법 0에서 n-1까지

const n = 7,
    roads = [[0, 6, 7], [0, 1, 2], [1, 2, 3], [1, 3, 3], [6, 3, 3], [3, 5, 1], [6, 5, 1], [2, 5, 1], [0, 4, 5], [4, 6, 2]]
// Output: 4
// Explanation: The shortest amount of time it takes to go from intersection 0 to intersection 6 is 7 minutes.
//     The four ways to get there in 7 minutes are:
//     - 0 ➝ 6
// - 0 ➝ 4 ➝ 6
// - 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
// - 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6

// 노드에 도착할 때, 방법의 가짓수(최소 거리)의 개수를 가져오고 이 후 다른 노드로 가면 그것들을 계속 지니고 있어야함.
// 2차 배열 만들자 인덱스가 출발, 요소 들은 도착지이고, 걸리는 시간은 객체에 저장
var countPaths = function (n, roads) {
    const graph = Array.from({length: n}, () => [])
    roads.forEach(([start, end, time]) => {
        graph[start].push([end, time])
        graph[end].push([start, time])
    })
    console.log(graph)
    // 노드마다 노드까지의 최단경로 시간 기록
    // 해당 시간의 경로 수 기록
    // 항상 가장 짧은 루트로 이동해야함.
    // 같은 경로를 찾으면, 지금까지의 경로수를 같은경로에 합쳐주고, 더 빠른 거 찾으면 덮어쒸움
    const dis = Array(n).fill(Infinity)
    dis[0] = 0

    const paths = Array(n).fill(0)
    paths[0] = 1

    const pq = [[0, 0]]

    while (pq.length) {
        pq.sort((a, b) => a[1] - b[1])
        const [curr, currTime] = pq.shift()

        if (dis[curr] < currTime) continue


        for (const [next, time] of graph[curr]) {
            const nextTime = currTime + time

            if (dis[next] > nextTime) {
                dis[next] = nextTime
                paths[next] = paths[curr]
                pq.push([next, nextTime])
            } else if (dis[next] === nextTime) {
                paths[next] = (paths[curr] + paths[next]) % (1e9 + 7)
            }
        }
    }

    return paths[n - 1]
};

console.log(countPaths(n, roads))