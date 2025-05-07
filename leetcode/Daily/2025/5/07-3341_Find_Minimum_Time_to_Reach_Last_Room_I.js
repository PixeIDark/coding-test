// 마지막 방 까지 도착하는데 걸리는 최소 시간. 요소는 해당 위치까지 오는데 필요한 최소 시간

const moveTime = [[2, 1, 59], [29, 57, 39]]
// Output: 6
// Explanation:
//     The minimum time required is 6 seconds.
//     At time t == 4, move from room (0, 0) to room (1, 0) in one second.
//     At time t == 5, move from room (1, 0) to room (1, 1) in one second.

// [0][0] 에서 시작 [n-1][m-1] 까지 도착
// 백트래킹은 고려 안해도됨 최적의 위치로만 아동
// 각 위치로 이동하면서 최적의 시간을 구해서 업데이트 되어야함
// dfs 밖에 안됨 만낫던 최소들을 큐에 보관하고 그 위치에서 다시 시작하게끔 해야함
// 임시로 sort 로 해보자 [y, x, value] <= 로 이동시키면 vis 되어있어서 이전에 갓던 루트는 못감
var minTimeToReach = function (moveTime) {
    // if (dy + y < 0 || dy + y >= n || dx + x < 0 || dx + x >= m) continue
    const n = moveTime.length
    const m = moveTime[0].length
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const times = Array.from({length: n}, () => Array(m).fill(Infinity))
    const pq = [[0, 0, 0]]
    times[0][0] = 0

    while (pq.length) {
        pq.sort((a, b) => a[2] - b[2])
        const [y, x, time] = pq.shift()

        if (y === n - 1 && x === m - 1) return time

        if (time > times[y][x]) continue

        for (const [dy, dx] of dir) {
            const ny = dy + y
            const nx = dx + x

            if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue

            const nextTime = Math.max(moveTime[ny][nx], time) + 1

            if (nextTime < times[ny][nx]) {
                times[ny][nx] = nextTime
                pq.push([ny, nx, nextTime])
            }
        }
    }
};

console.log(minTimeToReach(moveTime))