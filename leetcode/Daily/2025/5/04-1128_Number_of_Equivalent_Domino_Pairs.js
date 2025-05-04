// 도미노 쌍의 개수 출력

const dominoes = [[2, 1], [5, 4], [3, 7], [6, 2], [4, 4], [1, 8], [9, 6], [5, 3], [7, 4], [1, 9], [1, 1], [6, 6], [9, 6], [1, 3], [9, 7], [4, 7], [5, 1], [6, 5], [1, 6], [6, 1], [1, 8], [7, 2], [2, 4], [1, 6], [3, 1], [3, 9], [3, 7], [9, 1], [1, 9], [8, 9]]
// Output: 1

// 맵에 `${a}-${b}` 이런식으로 개수 저장
// 2개 이상이면 (n * (n - 1)) / 2 로 쌍 도출 후 결과에 추가
var numEquivDominoPairs = function (dominoes) {
    const map = new Map()

    return dominoes.reduce((acc, [a, b]) => {
        const key = a > b ? `${a}${b}` : `${b}${a}`
        const value = map.get(key) ?? 0

        map.set(key, value + 1)
        return acc + value
    }, 0)
};

console.log(numEquivDominoPairs(dominoes))