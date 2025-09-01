// 리턴 대신 원본 변경
// 스도쿠 풀기 => 백트래킹으로 숫자가 겹치면 바로 되돌아가기 => 겹칠경우 펄스 반환 해서 이프문으로 추적
// 판별함수 포문 한번으로 가능함
// 45분
var solveSudoku = function (board) {
    const n = board.length

    // y, x, 숫자 매개변수로 판별하는 함수
    const canSolve = (y, x, str) => {
        // y === 3, x === 6
        // y === 3 이면서 모든 x 탐색
        // x === 6 이면서 모든 y 탐색
        // 박스도 탐색해야하는데,
        // y === 3, x === 6,7,8
        // y === 4, x === 6,7,8
        // y === 5, x === 6,7,8
        // x 값은 Math.floor(x/3) * 3 + i % 3 으로 변환
        // y 값은 Math.floor(y/3) * 3 + Math.floor(i/3)
        for (let i = 0; i < n; i++) {

            const a = Math.floor(y / 3) * 3 + Math.floor(i / 3)
            const b = Math.floor(x / 3) * 3 + (i % 3)

            if (board[y][i] === str || board[i][x] === str || board[a][b] === str) return false
        }

        return true
    }

    // 모든 좌표를 순회하면서 canSolver를 충족하면 숫자를 대입하고 그게아니면 false 반환하는 백트래킹 함수
    // 백트래킹 실패 시 ""로 복원해야함
    // 매개변수 x 글로벌 참조
    const bk = () => {
        for (let y = 0; y < n; y++) {

            for (let x = 0; x < n; x++) {

                if (board[y][x] !== ".") continue

                for (let i = 1; i <= n; i++) {
                    if (!canSolve(y, x, String(i))) continue
                    board[y][x] = String(i)

                    if (bk()) return true

                    board[y][x] = "."
                }

                return false
            }
        }

        return true
    }

    bk()
};