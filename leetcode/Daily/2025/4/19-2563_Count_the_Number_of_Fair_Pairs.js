// 공정한 한 쌍의 개수 찾기.

const nums = [0, 1, 7, 4, 4, 5], lower = 3, upper = 6
// Output: 6
// Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).

// lower 이상 upper 이하 여야함 합이
// 정렬 후 쌍 중 하나의 요소를 픽 하고 lower 에서 upper 값을 빼서 이진 탐색으로 범위를 찾아야함
// 처음 픽한 요소가 복수일 수 있는데 이경우에는 map 에 키는 요소 값은 개수로 해서 개수만큼 곱해주면 됨
// 두번째 픽은 범위에 개수 만큼 더해줌
// // 처음 정렬은 고유하게 만들어야함 map 에 개수 저장 후 set 으로 정화
const lowerBinary = (nums, start, target) => {
    let left = start
    let right = nums.length

    while (left < right) {
        const mid = Math.floor((left + right) / 2)

        // 크거나 같은 값 중 최소 값으로 찾아야함
        if (nums[mid] >= target) {
            right = mid
        } else left = mid + 1
    }

    return right
}

const upperBinary = (nums, start, target) => {
    let left = start
    let right = nums.length

    while (left < right) {
        const mid = Math.floor((left + right) / 2)

        // 작거나 같은 값 중 최대 값으로
        if (nums[mid] <= target) {
            left = mid + 1
        } else right = mid
    }

    return left
}

console.time("1")
var countFairPairs = function (nums, lower, upper) {
    nums.sort((a, b) => a - b)
    // lower 부터 찾아보다가 없으면 1씩 증가시켜서 찾아
    // 그 다음 upper 부터 찾아보고 없으면 1씩 감소시켜서 찾아
    let result = 0

    for (let i = 0; i < nums.length - 1; i++) {
        const upperIdx = upperBinary(nums, i + 1, upper - nums[i])
        const lowerIdx = lowerBinary(nums, i + 1, lower - nums[i])
        const length = upperIdx - lowerIdx
        // 거의 다왔어 요소가 연속으로 중복일 때의 경우만 대처하면돼
        // nums[i] * 2 보다 lower 이 작으면
        result += length
    }

    return result
};
console.timeEnd("1")
// console.time("2")
// var countFairPairs = function (nums, lower, upper) {
//     // upper 보다 작은 쌍을 모두 더한다음 그 값에서 lower 보다 작은 쌍을 모두 빼주는 방식이 젤 고트임
//     nums.sort((a, b) => a - b);
//
//     const pairs = (target) => {
//         let left = 0
//         let right = nums.length - 1;
//         let count = 0
//
//         while (left < right) {
//             const sum = nums[left] + nums[right]
//
//             if (sum <= target) {
//                 count += right - left++
//             } else right--
//         }
//
//         return count
//     }
//
//     return pairs(upper) - pairs(lower - 1)
// };
// console.timeEnd("2") // 0.02ms
console.log(countFairPairs(nums, lower, upper));