// 루프재귀 없이 4의 거듭제곱인지 판별
// 3분
var isPowerOfFour = function (n) {
    if (n <= 0) return false

    const k = 1e10
    const power = Math.floor(Math.log(n) / Math.log(4) * k) / k

    return Number.isInteger(power)
};