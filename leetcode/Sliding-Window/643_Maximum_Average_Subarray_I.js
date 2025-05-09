// 길이가 k 인 연속 하위 배열중 요소의 평균값이 가장 큰 값 출력

const nums = [1, 12, -5, -6, 50, 3], k = 1
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// 슬라이딩 윈도우
// - 평균치로 비교 안하고 합산 값으로 비교해도됨
// - 길이가 고정
// 13분
var findMaxAverage = function (nums, k) {
    const n = nums.length
    let sum = 0

    for (let i = 0; i < k; i++) sum += nums[i]

    let maxSum = sum

    for (let i = k; i < n; i++) {
        sum += nums[i] - nums[i - k]
        maxSum = Math.max(maxSum, sum)
    }

    return maxSum / k
};

console.log(findMaxAverage(nums, k))