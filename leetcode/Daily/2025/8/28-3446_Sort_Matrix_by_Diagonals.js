// 왼쪽 아래 삼각형(중앙 포함) 내림차 정렬
// 오른쪽 위 삼각형 오름차 장렬
// (0, m -1), (n - 1, 0) 은 무시
// [0, 2]
// [0, m - 1] => [0 , m - 2], [1, m - 1] => [0, m - 3], [1, m - 2], [2, m - 3]
// [2, 0] => [1, 0], [2, 1] => [0, 0], [1, 1], [2, 2] => [0, 1], [1, 2] => [0, 2]
// 대각선 시작지점 [2, 0] => [1, 0] => [0, 0] => [0, 1] => [0, 2]
// y++ x++ 진행됨
// 34분, 끔찍한 문제;
var sortMatrix = function (grid) {
    const n = grid.length
    const m = grid[0].length
    const diagonals = n + m - 1

    for (let i = n - 1; i >= 0; i--) {
        const diagonal = []
        let y = i
        let x = 0

        for (let j = n - i; j > 0; j--) {
            diagonal.push(grid[y++][x++])
        }

        diagonal.sort((a, b) => b - a)

        y = i
        x = 0

        for (let a = n - i; a > 0; a--) {
            grid[y++][x] = diagonal[x++]
        }
    }

    for (let i = n - 1; i > 0; i--) {
        const diagonal = []
        let y = 0
        let x = i

        for (let j = n - i; j > 0; j--) {
            diagonal.push(grid[y++][x++])
        }

        diagonal.sort((a, b) => a - b)

        y = 0
        x = i

        for (let a = n - i; a > 0; a--) {
            grid[y][x++] = diagonal[y++]
        }
    }

    return grid
};