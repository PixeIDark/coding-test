// 최대 너비 구하기

const matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.

// 단조 오름차하다가 현재가 스택 마지막보다 낮으면 계산
// 최대 1 이어지는 길이를 기준으로 정렬
// 단조로 도저히 안떠오른다 bk vis 가자
// 벽
var maximalRectangle = function (matrix) {
    const n = matrix.length
    const m = matrix[0].length
    const vis = Array.from({length: n}, () => Array(m).fill(0))

    const bk = (y, x, sum) => {
        if (y < 0 || y >= n || matrix[y][x] === "0") {
            return sum
        }
        vis[y][x] = 1

        return bk(y + 1, x, sum + 1)


    }

    let result = 0

    for (let i = 0; i < n; i++) {

        let height = Infinity
        let width = 1
        for (let j = 0; j < m; j++) {

            if (vis[i][j]) continue
            if (matrix[i][j] === "0") {
                if (height === Infinity || width === 0) continue
                result = Math.max(result, height * width)
                console.log(height, width, i, j)
                height = Infinity
                width = 1
            } else {
                const a = bk(i, j, 0)
                height = Math.min(height, a)
                width++
            }

            if (width && j === m - 1) result = Math.max(result, height * width)
        }
    }

    return result

};

console.log(maximalRectangle(matrix))