// 루프나 재귀없이 3의 거듭제곱인지 판별
// 3 === 11, 9 === 1001, 27 === 11011
// 13분
var isPowerOfThree = function (n) {
    if (n <= 0) return false

    const k = 1e10
    const power = Math.floor(Math.log(n) / Math.log(3) * k) / k

    return Number.isInteger(power)
};