// dfs로 사전순으로 정렬
// k 번째로 작은수를 출력
// Math.min
// TODO: 벽, 알고리즘을 모름
var findKthNumber = function (n, k) {
    let result = 0
    let count = 0

    const dfs = (num) => {
        if (count === k) return result
        if (num > n) return

        result = num
        count++

        for (let i = 0; i < 10; i++) {
            const newNum = num * 10 + i
            if (newNum > n) return
            dfs(newNum)
        }
    }

    for (let i = 1; i < 10; i++) {
        dfs(i)
    }

    return result
};