// (첫번째 선택 인덱스 - 두번째 선택 인덱스) * 세번째 선택 인덱스 반환 음수면 0

const nums = [1, 10, 3, 4, 19]
// Output: 77
// Explanation: The value of the triplet (0, 2, 4) is (nums[0] - nums[2]) * nums[4] = 77.
// It can be shown that there are no ordered triplets of indices with a value greater than 77.

// 3 <= nums.length <= 100 걍 dfs 갈겨라
// 첫번째 값을 선택 후 다음 값은 첫번째 값보다 같거나 작아야함 그후 그뒤에서 가장 큰 값을 곱함.
var maximumTripletValue = function (nums) {
    let maxNum = 0
    let maxDiff = 0
    let result = 0

    for (const num of nums) {
        result = Math.max(result, maxDiff * num)

        maxDiff = Math.max(maxDiff, maxNum - num)

        maxNum = Math.max(maxNum, num)
    }

    return result
};

console.log(maximumTripletValue(nums));