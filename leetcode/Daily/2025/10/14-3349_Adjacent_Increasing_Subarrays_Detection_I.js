// 하위 배열 길이가 k 가 되면, 인접한 두번째 하위 배열 탐색 => 삑나면 다시 첫번째 하위 배열부터 탐색하되. 두번째 하위 배열이 첫번째 하위 배열이 될 수 있음
// 모노토닉 스택?
// 첫번째 배열과 두번째 배열 진행을 동시에 하고, 둘 중 하나라도 조건불만족일시 한칸 전진해서 다시 탐색
// 21분
var hasIncreasingSubarrays = function (nums, k) {
    if (k === 1) return true

    const n = nums.length
    let count = 0

    for (let i = 1; i + k < n; i++) {
        if (nums[i] > nums[i - 1] && nums[i + k] > nums[i - 1 + k]) count++
        else count = 0

        if (count === k - 1) return true
    }

    return false
};