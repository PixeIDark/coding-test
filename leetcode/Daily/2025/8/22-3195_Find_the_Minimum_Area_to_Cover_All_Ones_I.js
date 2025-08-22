// [0,0,1,0,0]
// [0,1,0,0,0]
// [0,0,0,0,1]
// [0,0,0,0,0]
// [0,0,1,0,0]
// 최대 위는 0 최대 아래는 4 최대 오른쪽은 4 최대 왼쪽은 1, Math.abs(4 - 0) + 1 * Math.abs(4 - 1) + 1 = 20
// 즉, 모든 1 위치를 탐색해서 가장높고낮은y 가장높고낮은x 구해서 연산
// 15분
var minimumArea = function (grid) {
    const n = grid.length
    const m = grid[0].length
    let top = 1000
    let bottom = 0
    let left = 1000
    let right = 0

    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            if (grid[y][x] === 0) continue

            top = Math.min(top, y)
            bottom = Math.max(bottom, y)
            left = Math.min(left, x)
            right = Math.max(right, x)
        }
    }

    const height = bottom - top + 1
    const length = right - left + 1
    const width = height * length

    return width
};