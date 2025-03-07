// left 이상 right 이하의 소수들 중, 가장 차가 적은 두값 반환 여러개면 num1 가장 작은 것 반환

const left = 10000000, right = 100000000
// Output: [11,13]
// Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
// The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
//     Since 11 is smaller than 17, we return the first pair.

// 어느 구간이 가장 짧은지 알아내야해
var closestPrimes = function (left, right) {
    const a = (n) => {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false
        }
        return true
    }

    const result = [-1, -1]
    if (left === right) return result
    if (left === 1) left++


    let currPrime = left === 2 ? 2 : -10
    let prevPrime = -10
    let min = Infinity
    if (left % 2 === 0) left++

    for (let i = left; i <= right; i += 2) {
        if (a(i)) {
            prevPrime = currPrime
            currPrime = i
        }

        if (prevPrime > 0 && currPrime - prevPrime < min) {
            min = currPrime - prevPrime
            result[0] = prevPrime
            result[1] = currPrime
        }

        if (min <= 2) break
    }

    return result
};

console.log(closestPrimes(left, right));