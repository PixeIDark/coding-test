// 짝수 끼리 더하면 짝수
// 홀수 끼리 더해도 짝수
// 홀수 + 짝수는 홀수
// [1, 2, 2, 1]
// 시퀸스의 상태는 짝수, 홀수 둘중 하나
// 짝짝짝짝, 홀홀홀홀
// 홀짝홀짝, 짝홀짝홀
// 짝수개수, 홀수개수, 홀짝패턴 슬라이딩 개수 중 최대 값
// [2, 2, 3, 4]
// 16분
var maximumLength = function (nums) {
    let odd = nums[0] % 2
    let even = 1 - odd
    let convert = 1
    // 슬라이딩 실패 시 초기화가 아니라 계속 탐색
    // 홀에서 짝 또는 짝에서 홀 처음 시작에서 몇번 바뀌는지 탐색 후 + 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] % 2 !== nums[i - 1] % 2) convert++

        if (nums[i] % 2 === 1) odd++
        else even++
    }

    return Math.max(odd, even, convert)
};