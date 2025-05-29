// 최단 출구 반환, 못나가면 -1

const maze = [[".", "+"]], entrance = [0, 0]
// Output: 1
// Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
//     Initially, you are at the entrance cell [1,2].
// - You can reach [1,0] by moving 2 steps left.
// - You can reach [0,2] by moving 1 step up.
//     It is impossible to reach [2,3] from the entrance.
//     Thus, the nearest exit is [0,2], which is 1 step away.

// 전방위 한칸씩 해보고 출구 y = 0,n x = 0,m 에 닿으면 즉시 종료
// 27분 반성해라
var nearestExit = function (maze, entrance) {
    const n = maze.length
    const m = maze[0].length
    const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]]
    const vis = Array.from({length: n}, () => Array(m).fill(0))
    let temp = []
    let queue = [entrance]
    let count = 0

    while (queue.length) {
        const [y, x] = queue.shift()

        if ((y !== entrance[0] || x !== entrance[1]) && (y === 0 || y === n - 1 || x === 0 || x === m - 1)) return count

        for (const [dy, dx] of dirs) {
            const ny = dy + y
            const nx = dx + x

            if (ny >= 0 && ny < n && nx >= 0 && nx < m && maze[ny][nx] === "." && !vis[ny][nx]) {
                vis[ny][nx] = 1
                temp.push([ny, nx])
            }
        }


        if (!queue.length && temp.length) {
            queue = [...temp]
            temp = []
            count++
        }
    }

    return -1
};

console.log(nearestExit(maze, entrance))