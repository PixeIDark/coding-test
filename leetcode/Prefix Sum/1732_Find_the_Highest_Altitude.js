// 프리 픽스 해서 가장 높은 값 반환

const gain = [-5, 1, 5, 0, -7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

// 6분
var largestAltitude = function (gain) {
    let max = 0
    let sum = 0

    for (const high of gain) {
        sum += high
        max = Math.max(max, sum)
    }

    return max
};

console.log(largestAltitude(gain))