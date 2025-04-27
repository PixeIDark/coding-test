// 길이가 3인 하위배열 중 0 + 2 인덱스의 합이 1 인덱스의 절반인 것

const nums = [1, 2, 1, 4, 1]
// Output: 1
// Explanation: Only the subarray [1,4,1] contains exactly 3 elements where the sum of the first and third numbers equals half the middle number.

// 연속 배열
var countSubarrays = function (nums) {
    let result = 0

    for (let i = 0; i < nums.length - 2; i++) if ((nums[i] + nums[i + 2]) === nums[i + 1] / 2) result++

    return result
};

console.log(countSubarrays(nums))