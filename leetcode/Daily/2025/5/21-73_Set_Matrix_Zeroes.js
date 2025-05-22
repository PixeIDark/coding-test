// 0 위치 행과열 모두 0으로 바꿔서 반환

const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// 0 의 y 와 x 를 set 저장
// 모든 요소가 0으로 이루어진 배열을 생성하고 저장된 y, x를 피해서 matrix 요소를 할당
// dㅏ 원본을 변경해야함
// 31분
var setZeroes = function (matrix) {
    const setY = new Set()
    const setX = new Set()

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] === 0) {
                setY.add(y)
                setX.add(x)
            }
        }
    }

    const pasteY = Array(matrix[0].length).fill(0)

    for (let y = 0; y < matrix.length; y++) {
        if (setY.has(y)) {
            matrix[y] = pasteY
            continue
        }

        for (let x = 0; x < matrix[0].length; x++) {
            if (setX.has(x)) matrix[y][x] = 0
        }
    }

};

console.log(setZeroes(matrix))
console.log(matrix)