// 2개의 수평 또는 수직으로 컷이 가능한지

const n = 4, rectangles = [[0, 2, 2, 4], [1, 0, 3, 2], [2, 2, 3, 4], [3, 0, 4, 2], [3, 2, 4, 4]]
// Output: true
// Explanation:
//     The grid is shown in the diagram. We can make horizontal cuts at y = 2 and y = 4. Hence, output is true.

// 0,2 x 1,3 y 0이랑 마지막 인덱스는 못짜름
// 걍 수직 범위 배열에 넣고, 수평 범위도 배열에 넣어서 2개이상 나오는 쪽 있는지 확인해라
var checkValidCuts = function (n, rectangles) {
    const horizontal = []
    const vertical = []

    for (const [x1, y1, x2, y2] of rectangles) {
        horizontal.push([y1, y2])
        vertical.push([x1, x2])
    }

    horizontal.sort((a, b) => a[0] - b[0])
    vertical.sort((a, b) => a[0] - b[0])

    let horizontalCount = 0
    let verticalCount = 0
    let maxYEnd = horizontal[0][1]
    let maxXEnd = vertical[0][1]

    // max end와 같은 currstart 가 나오면 +1 카운트임
    for (let i = 1; i < horizontal.length; i++) {
        const [startY, endY] = horizontal[i]
        const [startX, endX] = vertical[i]

        if (startY === maxYEnd) horizontalCount++
        if (startX === maxXEnd) verticalCount++

        if (horizontalCount === 2 || verticalCount === 2) return true

        maxYEnd = Math.max(maxYEnd, endY)
        maxXEnd = Math.max(maxXEnd, endX)
    }

    return false
};

console.log(checkValidCuts(n, rectangles))