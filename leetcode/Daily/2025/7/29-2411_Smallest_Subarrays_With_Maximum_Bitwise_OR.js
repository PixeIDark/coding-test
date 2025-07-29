// 최대 or 인 하위배열 길이를 배열에 담아 반환
// TODO: 벽, TLE
var smallestSubarrays = function (nums) {
    const n = nums.length
    const max = nums.reduce((a, b) => a | b, 0)
    const result = []

    for (let i = 0; i < n; i++) {
        let sum = 0

        for (let j = i; j < n; j++) {
            sum |= nums[j]
            if (sum === max) break
        }

        let curr = 0

        for (let j = i; j < n; j++) {
            curr |= nums[j]

            if (curr === sum) {
                result.push(j - i + 1)
                break
            }
        }
    }

    return result
};