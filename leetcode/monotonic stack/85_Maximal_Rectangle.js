// 최대 너비 구하기

const matrix =
    [["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"]]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.

// 단조 오름차하다가 현재가 스택 마지막보다 낮으면 계산
// 최대 1 이어지는 길이를 기준으로 정렬
// 단조로 도저히 안떠오른다 bk vis 가자
// 벽
var maximalRectangle = function (matrix) {
    // 이거 매트릭스를 순회하면서 각 인덱스 만들어서 1이면 길이 업 시키고 0 이면 길이 0으로 초기화 시켜야해
    // 길이들을 오름차 단조스택으로 만들고, 어긋날 때마다 자기 위치 길이 계산 시켜주자
    const calRectangle = (heights) => {
        const stack = [-1]
        let result = 0
        // [ 1, 3, 3, 2, 2 ]
        for (let i = 0; i <= heights.length; i++) {
            while (stack.length > 1 && (heights[stack[stack.length - 1]] > heights[i] || i === heights.length)) {
                const height = heights[stack.pop()]
                const width = i - stack[stack.length - 1] - 1
                result = Math.max(result, height * width)
            }

            stack.push(i)
        }

        return result
    }

    const heights = Array(matrix[0].length).fill(0);
    let result = 0

    for (const mat of matrix) {
        for (let i = 0; i < mat.length; i++) {
            if (mat[i] === "1") heights[i]++
            else heights[i] = 0
        }

        result = Math.max(result, calRectangle(heights))
    }

    return result
};

console.log(maximalRectangle(matrix))