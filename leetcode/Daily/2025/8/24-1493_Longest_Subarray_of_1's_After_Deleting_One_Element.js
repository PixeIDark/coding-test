// 요소 하나 삭제해서 1로만 구성된 가장긴 부분배열의 길이 반환
// 슬라이딩 하면서 0을 만나면 퍼스트와 세컨드로 나눔
// 0을 한번더 만나면 퍼스트, 세컨드의 합을 정리 후 퍼스트에 세컨트를 할당하고, 0 이후부터 세컨드로 계산
// 12분
var longestSubarray = function (nums) {
    const n = nums.length
    let first = 0
    let second = 0
    let maxLength = 0
    let hasZero = nums.some((x) => x === 0)

    if (!hasZero) return n - 1

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            maxLength = Math.max(maxLength, first + second)
            first = second
            second = 0
        } else second++
    }

    maxLength = Math.max(maxLength, first + second)

    return maxLength
};