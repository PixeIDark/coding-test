// 가장 긴 대각선 최대 면적
// [9, 1], [2, 8]
// 13분
var areaOfMaxDiagonal = function (dimensions) {
    let max = 0
    let stack = []

    for (const [y, x] of dimensions) {
        const diagonal = y * y + x * x

        // 대각선 가장 긴거 여러개면
        if (max <= diagonal) {
            if (max < diagonal) stack = []

            max = diagonal
            stack.push(x * y)
        }
    }

    return Math.max(...stack)
};