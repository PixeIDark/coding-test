// 3개씩 끊어쳐서 중복 없애기

const nums = [6, 7, 8, 9]
// Output: 2
// Explanation:
//     In the first operation, the first 3 elements are removed, resulting in the array [4, 2, 3, 3, 5, 7].
//     In the second operation, the next 3 elements are removed, resulting in the array [3, 5, 7], which has distinct elements.
//     Therefore, the answer is 2.

// 빈 배열도 고유한거로 여겨짐
// 배열의 맨끝에서부터 탐색해서 중복 나올경우, 걔 인덱스 기억해서 반환
var minimumOperations = function (nums) {
    const vis = new Set()
    let target = 0

    for (let i = nums.length - 1; i >= 0; i--) {
        if (vis.has(nums[i])) {
            target = i + 1
            break
        }
        vis.add(nums[i])
    }

    return Math.ceil(target / 3)
};

console.log(minimumOperations(nums));