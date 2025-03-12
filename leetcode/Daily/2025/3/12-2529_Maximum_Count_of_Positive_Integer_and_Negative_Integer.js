// 양, 음의 정수 최대 개수 둘중 하나

const nums = [-3, -2, -1, 0, 0, 1, 2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.

// 오름차순으로 정렬되어있다.
// 0개수, 음의 정수 개수 까지만 세면돼
// 양의 정수는 길이에서 - 0 개수 - 음의 정수 개수
var maximumCount = function (nums) {
    let zeroCount = 0

    let left = 0
    let right = nums.length - 1
    let idx = -1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] < 0) {
            left = mid + 1
            idx = mid
        } else {
            right = mid - 1
        }
    }

    for (let i = idx + 1; i < nums.length; i++) {
        if (nums[i] === 0) zeroCount++
        else break
    }


    return Math.max(idx + 1, nums.length - idx - 1 - zeroCount)
};

console.log(maximumCount(nums));