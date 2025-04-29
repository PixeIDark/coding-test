// 최대 요소가 최소 k 회 이상 나타나는 하위 배열의 개수

const nums = [1, 4, 2, 1], k = 3
// Output: 6
// Explanation: The subarrays that contain the element 3 at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].

// 최대 요소는 nums 의 최대 요소를 말하는거임 하위 배열의 요소 중 최대가 아니라
// 그럼 쉽지 배열 한 번 순회해서 최대 값이 누군지 특정하고 슬라이딩 윈도우 돌면 됨
var countSubarrays = function (nums, k) {
    let max = Math.max(...nums)
    let result = 0
    let count = 0
    let left = 0

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === max) count++

        while (count >= k) {
            // 길이에서 right 뺀 값 추가
            result += nums.length - right
            if (nums[left++] === max) count--
        }

    }

    return result
};

console.log(countSubarrays(nums, k));