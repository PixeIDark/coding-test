// 정사각형의 개수 출력
// [0,1,1,1]
// [1,1,2,2]
// [0,1,2,3]
// 1 + 4 + 9
// 변5 정사각형은 1 + 4 + 9 + 16 + 25
// 변8 정사격형은 1 + 4 + 9 + 16 + 25 + 36 + 49 + 64
// 변이 늘면 변 * 변 만큼 개수가 추가됨, 최대 변 길이 300
// 46분
var countSquares = function (matrix) {
    const n = matrix.length
    const m = matrix[0].length
    let count = 0

    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            if (matrix[y][x] === 0) continue

            if (y > 0 && x > 0) matrix[y][x] = Math.min(matrix[y - 1][x], matrix[y][x - 1], matrix[y - 1][x - 1]) + 1
            count += matrix[y][x]
        }
    }
    // y = 0, x = 0 카운트 해야함
    return count
};