// [0, 0] => [n - 1, m - 1] 최소거리, t = grid[n - 1][m - 1]
// 최소한의 기다림으로 결승
// 1. 걍 무조건 t 값 1씩 증가시키면서 dfs 하게 유기할수도있음
// [0, 0] 에서부터 최소 비용의 grid[y][x] 로만 이동함. 이동하면서 방문하지않고, 흩어본 곳은 최소힙에 넣음
// 1. [0, 0] 에서 시작하면 [1, 24, 23] 최소힙, 가장 앞선 1부터 탐색 [0, 0] => [0, 1] [23, 24, 2]
// 2. 매 탐색마다 최소힙을 갱신하고 가까운 곳으로이동 최소힙 구조는 pq = [[value, y, x]]
// 37분
var swimInWater = function (grid) {
    const n = grid.length
    const m = grid[0].length
    const vis = Array.from({length: n}, () => Array(m).fill(false))
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    let pq = [[grid[0][0], 0, 0]]
    let t = 0

    while (pq.length) {
        const [value, y, x] = pq.pop()
        t = Math.max(t, value)
        vis[y][x] = true

        if (y === n - 1 && x === m - 1) break

        for (const [dy, dx] of dirs) {
            const ny = dy + y
            const nx = dx + x

            if (ny < 0 || nx < 0 || ny >= n || nx >= m || vis[ny][nx]) continue

            pq.push([grid[ny][nx], ny, nx])
        }

        pq.sort((a, b) => b[0] - a[0])
    }

    // 최소힙 쓰면 16배 개선 가능
    return t
};