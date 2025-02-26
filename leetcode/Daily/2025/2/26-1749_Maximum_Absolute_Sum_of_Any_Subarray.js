// 최대합 최소합 부분 집합 구해서 절대 최대 값 찾기

const nums = [2, -5, 1, -4, 3, -2]
// Output: 8
// Explanation: The subarray [-5,1,-4] has absolute sum = abs(-5+1-4) = abs(-8) = 8.

//
var maxAbsoluteSum = function (nums) {
    let guiding = 0
    let luring = 0
    let max = -Infinity
    let min = Infinity

    for (const num of nums) {
        guiding = Math.max(guiding + num, num)
        max = Math.max(max, guiding)

        luring = Math.min(luring + num, num)
        min = Math.min(min, luring)

    }

    return Math.max(Math.abs(max), Math.abs(min))
};

console.log(maxAbsoluteSum(nums));