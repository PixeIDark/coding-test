// 최대 색 쌍 리턴하기

const n = 4, queries = [[0, 2], [1, 2], [3, 1], [1, 1], [2, 1]]
// Output: [0,1,1,0,2]
// Explanation:
// Initially array colors = [0,0,0,0], where 0 denotes uncolored elements of the array.
// After the 1st query colors = [2,0,0,0]. The count of adjacent pairs with the same color is 0.
// After the 2nd query colors = [2,2,0,0]. The count of adjacent pairs with the same color is 1.
// After the 3rd query colors = [2,2,0,1]. The count of adjacent pairs with the same color is 1.
// After the 4th query colors = [2,1,0,1]. The count of adjacent pairs with the same color is 0.
// After the 5th query colors = [2,1,1,1]. The count of adjacent pairs with the same color is 2.

// 색이 추가-삭제 될 때, 양 옆의 상태를 확인해서 쌍의 개수를 지속적으로 추적 후 결과에 푸시
// 40분
var colorTheArray = function (n, queries) {
    const colors = Array(n).fill(0)
    const stack = []
    let pairs = 0

    for (const [i, color] of queries) {
        if (color === colors[i]) {
            stack.push(pairs)
            continue
        }

        if (colors[i - 1] && colors[i] === colors[i - 1]) pairs--
        if (colors[i + 1] && colors[i] === colors[i + 1]) pairs--

        colors[i] = color

        if (colors[i] === colors[i - 1]) pairs++
        if (colors[i] === colors[i + 1]) pairs++

        stack.push(pairs)
    }

    return stack
};

console.log(colorTheArray(n, queries))