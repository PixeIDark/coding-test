// 모든 직사각형의 개수 출력
// [1,0,1] 2
// [2,1,0] 4
// [3,2,0] 7
// 가로 세로 반복문후 연속이면 + 1
// dp[i - 1][j] !== 0 ||
// dp[i][j - 1] !== 0 ||
// dp[i - 1][j - 1] !== 0 일시, + 1
// 34분
var numSubmat = function (mat) {
    const n = mat.length
    const m = mat[0].length

    for (let y = 0; y < n; y++) {
        let sequence = 0

        for (let x = 0; x < m; x++) {
            if (mat[y][x] === 0) sequence = 0
            else {
                mat[y][x] += sequence
                sequence++
            }
        }
    }

    console.log(mat)

    for (let x = 0; x < m; x++) {
        let sequence = 0

        for (let y = 0; y < n; y++) {
            if (mat[y][x] === 0) sequence = 0
            else {
                mat[y][x] += sequence
                sequence++
            }
        }
    }

    console.log(mat)

    let count = 0

    for (let y = 0; y < n; y++) {
        let sequence = 0

        for (let x = 0; x < m; x++) {
            if (mat[y][x] === 0) continue

            if (x !== 0 && y !== 0 && (mat[y - 1][x] !== 0 && mat[y][x - 1] !== 0 && mat[y - 1][x - 1] !== 0)) mat[y][x]++

            count += mat[y][x]
        }
    }

    console.log(mat)
    return count
};