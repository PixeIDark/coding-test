// 서북 태평양, 남동 대서양
// 태평양 전용 vis, 대서양 전용 vis 만들어서 공통된 부분 출력 (추후 하나로 합칠수도 있음 )
// 물의 높이가 같거나 낮으면 이동함 낮은쪽으로
// 38분
var pacificAtlantic = function (heights) {
    const n = heights.length
    const m = heights[0].length
    const pacific = Array.from({length: n}, () => Array(m).fill(false))
    const atlantic = Array.from({length: n}, () => Array(m).fill(false))
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    const dfs = (y, x, map) => {
        if (map[y][x]) return

        map[y][x] = true

        for (const [dy, dx] of dirs) {
            const ny = dy + y
            const nx = dx + x

            if (ny < 0 || nx < 0 || ny >= n || nx >= m || heights[ny][nx] < heights[y][x]) continue

            dfs(ny, nx, map)
        }
    }

    for (let y = 0; y < n; y++) {
        dfs(y, 0, pacific)
        dfs(y, m - 1, atlantic)
    }

    for (let x = 0; x < m; x++) {
        dfs(0, x, pacific)
        dfs(n - 1, x, atlantic)
    }

    const result = []

    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            if (pacific[y][x] && atlantic[y][x]) result.push([y, x])
        }
    }

    return result
};