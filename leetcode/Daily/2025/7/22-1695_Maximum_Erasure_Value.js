// [1,2,3,4,5,8,9,4,5]
// [100, 101, 1,2,3,4,5,100,101]
// 슬라이딩
// 17분
var maximumUniqueSubarray = function (nums) {
    const vis = new Set()
    let sum = 0
    let max = 0

    for (let l = 0, r = 0; r < nums.length; r++) {
        while (vis.has(nums[r])) {
            vis.delete(nums[l])
            sum -= nums[l++]
        }

        sum += nums[r]
        vis.add(nums[r])

        max = Math.max(max, sum)
    }

    return max
};