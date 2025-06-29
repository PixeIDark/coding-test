// 최소 + 최대 <= target 을 만족하는 부분수열의 개수
// 1. nums 로 부분수열의 개수를 구하는 공식
// 1 => 1,
// 2 => 2 + 1 = 3,
// 3 => 4 + 2 + 1 = 7,
// 4 => 8 + 4 + 2 + 1 = 15,
// 5 => 16 + 8 + 4 + 2 + 1 = 31
// 6 => 32 + 16 + 8 + 4 + 2 + 1 = 63
// 2 ^ n - 1 => n = 3, 2 ^ 0 + 2 ^ 1 + 2 ^ 2 = 2 ^ 3 - 1
// 투 포인터로 불가능한 부분을 찾아야하는데, 공식을 모름
// 1. 가능한 경우로 범위 좁혀서 개수 더함 없으면 종료
// 2. 범위에서 불가능한 범위 좁혀서 개수 뺌 없으면 종료
// 3. 범위에서 좁혀서 가능한 범위 더함 만약 없으면 종료
// 4. 범위에서 좁혀서 불가능한 범위 뺌
// 무한 반복 sum >= target 이면 l--
// sum < target r++
// 63분
var numSubseq = function (nums, target) {
    nums.sort((a, b) => a - b)

    const MOD = 1e9 + 7
    const n = nums.length
    const dp = Array(n).fill(1)

    for (let i = 1; i < n; i++) {
        dp[i] = (dp[i - 1] * 2) % MOD
    }

    let total = 0
    let l = 0
    let r = n - 1

    // Math.pow 일정 이상이면 인피니트 반환함
    while (l <= r) {
        const sum = nums[l] + nums[r]

        if (sum <= target) {
            total = (total + dp[r - l]) % MOD
            l++
        } else r--

    }

    return total
};