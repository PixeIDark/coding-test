// 제곱 함수 만들기
// n 이 음수면 x => 1/x, 양수면 그대로
// 나눠서 제곱하는 시스템 만들어야한다 그냥은 tle뜸
// 나눈 얘들이 서로 곱하게 하는 시스템 dfs 기반으로
// 20분
// var myPow = function(x, n) {
//     const dfs = (pow, n) => {
//         if(n === 1) return pow
//         if(n === 0) return 1

//         const half = dfs(pow, Math.floor(n / 2))
//         const result = half * half

//         return n % 2 === 1 ? result * pow : result
//     }

//     const result = dfs(x, Math.abs(n))

//     return n < 0 ? 1 / result : result
// };

var myPow = function (x, n) {
    let result = 1
    let k = Math.abs(n)

    while (k) {
        if (k % 2 === 1) result *= x

        x *= x
        k = Math.floor(k / 2)
    }

    return n < 0 ? 1 / result : result
};