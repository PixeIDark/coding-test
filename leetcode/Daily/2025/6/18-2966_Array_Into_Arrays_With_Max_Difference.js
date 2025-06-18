// 배열의 요소간 최대 차이가 k 이하가 되도록 중첩 배열을 만들어라
// 가장 큰 요소 - 가장 작은 요소 = 최대 차이
// [0, 1, 2] [3, 4, 5] [2, 5, 8]
// n / 3 만큼 인덱스를 건너뜀
// 18분
var divideArray = function (nums, k) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    const result = []

    for (let i = 0; i < n; i += 3) {
        const temp = [nums[i], nums[i + 1], nums[i + 2]]

        if (temp[2] - temp[0] > k) return []
        result.push(temp)
    }

    return result
};