// p개의 쌍이 있고, 쌍을 이루는 두 요소의 차이를 diff
// Math.max(...diffs) 최소 값 반환
// 한번 쓰인 인덱스는 재사용 불가
// 47분
var minimizeMax = function (nums, p) {
    if (p === 0) return 0
    // 쌍을 구성할 때 전체 전략을 인지하면서 전술을 구현해야함
    // 그렇다면 전술의 방향에따라 전략이 계속 바뀜.
    // 무차별 대입을 해볼수 밖에 없음.
    // 이분 탐색.
    // 출력값 k 가 가능한지. 불가능하면 값을 높이고 가능하면 값을 낮춤
    nums.sort((a, b) => a - b)
    const n = nums.length

    const canMaxNum = (k) => {
        let count = 0

        for (let i = 0; i < n; i++) {
            const diff = nums[i + 1] - nums[i]

            if (diff <= k) {
                count++
                i++
            }

            if (count === p) return true
        }

        return false
    }

    let left = 0
    let right = nums[n - 1] - nums[0]

    while (left < right) {
        const mid = Math.floor((left + right) / 2)

        if (canMaxNum(mid)) right = mid
        else left = mid + 1
    }

    return left
};