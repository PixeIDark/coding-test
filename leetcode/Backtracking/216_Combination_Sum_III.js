// 유효한 숫자 무조건 존재한다고 가정
// 배열에 숫자들 넣고 길이가 k 이고 합이 n 이면 결과에 푸시
// 17분
var combinationSum3 = function (k, n) {
    const result = []

    const dfs = (arr, total, j) => {
        if (arr.length === k) {
            if (total === n) result.push([...arr])
            return
        }

        for (let i = j; i < 10; i++) {
            arr.push(i)
            dfs(arr, total + i, i + 1)
            arr.pop(i)
        }
    }
    dfs([], 0, 1)

    return result
};