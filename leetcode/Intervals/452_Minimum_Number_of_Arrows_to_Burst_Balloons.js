// 겹치는 놈 있으면 length--
// 겹치는 놈중 범위가 가장 작은 얘를 쏴야함
// [[10,16],[2,8],[1,6],[7,12]] a - b a[1] - b[1]
// [[1,6],[2,8],[7,12],[10,16]]
// [[1,2],[2,3],[3,4],[4,5]]
// 11분
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[1] - b[1])

    const n = points.length
    let count = n
    let prevEnd = points[0][1]

    for (let i = 1; i < n; i++) {
        const [start, end] = points[i]

        if (prevEnd >= start) count--
        else prevEnd = end
    }

    return count
};