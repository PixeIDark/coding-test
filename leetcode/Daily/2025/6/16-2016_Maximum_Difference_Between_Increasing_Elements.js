// 인덱스 i < j, 요소 j - i 차이가 최대가 몇인지
// 최소를 정해.
// 최소는 자기보다 작은 얘를 찾으면 깨로 갱신돼
// 매 현재의 요소 - 최소 로 초대 차이 값을 갱신해 매순간
// 9분
var maximumDifference = function (nums) {
    let min = nums[0]
    let maxDiff = -1

    for (let i = 1; i < nums.length; i++) {
        if (min < nums[i]) maxDiff = Math.max(maxDiff, nums[i] - min)
        else min = Math.min(min, nums[i])
    }

    return maxDiff
};