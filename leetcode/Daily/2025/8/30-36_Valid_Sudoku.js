// 비트쓰면 1차 배열로도 가능
// 약 10분? 일주일 전에 풀었었음
var isValidSudoku = function (board) {
    const n = board.length
    const m = board[0].length
    const cols = Array.from({length: m}, () => new Set())
    const box = Array.from({length: m}, () => new Set())

    for (let y = 0; y < n; y++) {
        const row = new Set()

        for (let x = 0; x < m; x++) {
            if (board[y][x] === ".") continue

            const yx = Math.floor(x / 3) + Math.floor(y / 3) * 3

            if (row.has(board[y][x]) || cols[x].has(board[y][x]) || box[yx].has(board[y][x])) return false
            row.add(board[y][x])
            cols[x].add(board[y][x])
            box[yx].add(board[y][x])
        }
    }

    return true
};