// n 을 2의 거듭제곱 배열로 펼친것을 powers
// query는 power 인덱스 범위내의 합 배열로 반환
// n 은 나누어 떨어진다고 가정
// 32분
var productQueries = function (n, queries) {
    const MOD = 1e9 + 7
    const powers = []
    const bit = n.toString(2)

    // n = 15 === 1111, [1,2,4,8] => [1, 2, 8, 64]
    for (let i = bit.length - 1; i >= 0; i--) {
        if (bit[i] === "0") continue

        const power = 1 << bit.length - 1 - i
        powers.push(power)
    }

    // 일단 브루트 포스
    const result = []

    for (const [start, end] of queries) {
        let sum = 1

        for (let i = start; i <= end; i++) {
            sum = (sum * powers[i]) % MOD
        }

        result.push(sum)
    }

    return result
};