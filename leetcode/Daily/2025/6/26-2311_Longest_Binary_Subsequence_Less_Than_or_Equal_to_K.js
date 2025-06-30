// k 보다 작은 가장 긴 부분 이진수
// 0은 무조건 다 넣으면됨. 뒤에서부터 시작해서 0을 카운팅하고 수용가능한 1은 모두 가져감
// 1 2 4 8 16 32 각 자리수 n 2 ^ n - 1 해서 카운팅함
// 17분
var longestSubsequence = function (s, k) {
    const dp = Array(s.length).fill(1)

    for (let i = 1; i < s.length; i++) {
        dp[i] = dp[i - 1] * 2
    }

    let length = 0
    let sum = 0

    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i]

        if (char === "1") {
            if (sum + dp[length] <= k) {
                sum += dp[length]
                length++
            }
        } else length++
    }

    return length
};