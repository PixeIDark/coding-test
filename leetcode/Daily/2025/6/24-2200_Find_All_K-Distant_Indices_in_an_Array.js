// 키 값과 일치하는 요소를 가진 인덱스 위치를 기준으로 가장가까운 인덱스가 k 거리내에 있으면 해당 인덱스들을 오름차순으로 반환
// i - j 가 양수로 범위를 벗어날 경우 다음 j 를 갱신함 음수로 벗어날 경우에는 대처 x
// 절대 값으로 했을 경우 범위 내에 있으면 배열에 넣음
// 24분
var findKDistantIndices = function (nums, key, k) {
    // 키를 탐지할경우 -k ~ +k 까지의 인덱스를 셋에 추가함
    const result = new Set()

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        if (num !== key) continue

        for (let l = Math.max(0, i - k), r = Math.min(nums.length - 1, i + k); l <= Math.min(nums.length - 1, i + k); l++) {
            result.add(l)
        }
    }

    return [...result].toSorted((a, b) => a - b)
};