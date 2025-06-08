// 1부터 n 까지의 숫자를 문자열로 했을 때, 사전순으로 정렬 number[]
// 시간 복잡도 O(n), 공간 복잡도 O(1)
// [1, 10, 11..., 2, 20, 21...]
// ["1", "10", "11", "100", "101", "12"]  => [ '1', '10', '100', '101', '11', '12' ]
// [1, 10, 100, 1000, 10000, 10001 ~ 10009, 1001 ~ 1009, 10011]
// 29분
var lexicalOrder = function (n) {
    const result = []

    const dfs = (num) => {
        if (num > n) return

        result.push(num)

        for (let i = 0; i < 10; i++) {
            dfs(num * 10 + i)
        }
    }

    for (let i = 1; i < 10; i++) {
        dfs(i)
    }

    return result
};