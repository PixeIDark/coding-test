// 동일한 행과 열 쌍 개수 반환

const grid = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
//     - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

// 동일한 행, 동일한 열 이 각각 3개씩 나오면 쌍은 3 * 3 = 9
// map1, map2 에 각각 num => count 저장
// map1 값 * map2 값 = 쌍
// 16분
var equalPairs = function (grid) {
    const rowMap = new Map()
    const colMap = new Map()

    for (let i = 0; i < grid.length; i++) {
        const rowStr = JSON.stringify(grid[i])
        rowMap.set(rowStr, (rowMap.get(rowStr) ?? 0) + 1)

        const colStr = JSON.stringify(grid.map(row => row[i]))
        colMap.set(colStr, (colMap.get(colStr) ?? 0) + 1)
    }

    let result = 0

    for (const [key, rows] of rowMap) {
        const cols = colMap.get(key) ?? 0
        result += rows * cols
    }

    return result
};

console.log(equalPairs(grid))