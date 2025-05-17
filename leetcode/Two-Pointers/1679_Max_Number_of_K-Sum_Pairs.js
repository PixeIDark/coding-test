// 합이 k 가 되는 두 요소 쌍이 몇개인지 요소는 한 번 사용하면 폐기

const nums = [3, 1, 3, 4, 3], k = 6
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
//     - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.

// 이진 탐색?
// k - nums[i] 값을 set 에 넣고 set.has(nums[i]) 존재시 한쌍. 사용후 set.delete(nums[i]
// 9분
var maxOperations = function (nums, k) {
    // const map = new Map()
    // let result = 0
    //
    // for (const num of nums) {
    //     if (map.get(num) > 0) {
    //         result++
    //         map.set(num, map.get(num) - 1)
    //     } else {
    //         const target = k - num
    //         map.set(target, (map.get(target) ?? 0) + 1)
    //     }
    // }
    //
    // return result

    // 정렬이 더 느림
    nums.sort((a, b) => a - b)

    let left = 0
    let right = nums.length - 1
    let result = 0

    while (left < right) {
        const sum = nums[left] + nums[right]

        if (sum < k) left++
        else if (sum > k) right--
        else {
            result++
            left++
            right--
        }
    }

    return result
};

console.log(maxOperations(nums, k))