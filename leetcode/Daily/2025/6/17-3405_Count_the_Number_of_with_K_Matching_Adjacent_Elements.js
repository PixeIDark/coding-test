// n: 배열의 크기, m: 요소의 범위(1 ~ m), k: 배열에 인접한 요소가 같은 개수
// [1, 1, 1, 2], [1, 1, 2, 2] k === 2 
// k 를 초과하게 되면 넘어가지말고 다른 요소 넣게
// 조합론 아니면 못품 걍 도저히 수학적 통찰이 안됨.
// TODO: 벽
var countGoodArrays = function (n, m, k) {
    const MOD = 1e9 + 7
    // dfs 밖에 생각이 안남 ㅋ 
    let result = 0

    const dfs = (str, count) => {
        if (str.length === n) {
            if (count === k) result = (result + 1) % MOD
            return
        }

        for (let i = 1; i <= m; i++) {
            // str 마지막 값과 넣을 값 비교 
            let newCount = count
            const addChar = String(i)
            const lastChar = str[str.length - 1]

            if (addChar === lastChar) newCount += 1

            if (newCount > k) continue

            dfs(str + addChar, newCount)
        }
    }
    // 로직은 정상 작동함. 근데 모듈을 어떻게 적용할지가 관건임 
    dfs("", 0)

    return result
};