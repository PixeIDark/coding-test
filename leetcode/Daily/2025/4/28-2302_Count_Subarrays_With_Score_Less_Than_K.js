// 모든 요소의 합 * 길이 가 k 미만인 하위 배열의 개수

const nums = [1, 1, 1], k = 5
// Output: 6
// Explanation:
//     The 6 subarrays having scores less than 10 are:
//     - [2] with score 2 * 1 = 2.
//     - [1] with score 1 * 1 = 1.
//     - [4] with score 4 * 1 = 4.
//     - [3] with score 3 * 1 = 3.
//     - [5] with score 5 * 1 = 5.
//     - [2,1] with score (2 + 1) * 2 = 6.
//     Note that subarrays such as [1,4] and [4,3,5] are not considered because their scores are 10 and 36 respectively, while we need scores strictly less than 10.

// 슬라이딩 윈도우롷 최대치로 r 전진 배열 개수 계산후 l, r 한칸 전진 안되면 r 후퇴 개수 계산후 계속 반복.
var countSubarrays = function (nums, k) {
    let result = (nums.length * (nums.length + 1)) / 2
    let sum = 0
    let left = 0

    for (let right = 0; right < nums.length; right++) {
        // right - left 로 길이가 결정됨.
        // 만일 right 1회 실행해서 실패시 길이는 0이므로 개수가 잘못 계산될일 없음
        sum += nums[right]

        // 빼는 방식으로 사고의 전환
        while (sum * (right - left + 1) >= k) {
            result -= nums.length - right
            sum -= nums[left++]
        }
    }

    return result
};

console.log(countSubarrays(nums, k))