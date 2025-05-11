// 3연 홀수가 나오는지 불리언

const arr = [2, 6, 4, 1]
// Output: true
// Explanation: [5,7,23] are three consecutive odds.

// 3연 홀수가 나올시 즉시 반환
// 3분
var threeConsecutiveOdds = function (arr) {
    let count = 0

    for (const num of arr) {
        if (num % 2 === 0) count = 0
        else count++

        if (count === 3) return true
    }

    return false
};

console.log(threeConsecutiveOdds(arr))