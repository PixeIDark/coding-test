// 원형 배열에서 인접값의 최대 차이
// 4분
var maxAdjacentDistance = function (nums) {
    let maxDiff = Math.abs(nums[0] - nums[nums.length - 1])

    for (let i = 1; i < nums.length; i++) {
        maxDiff = Math.max(maxDiff, Math.abs(nums[i] - nums[i - 1]))
    }

    return maxDiff
};