// 모든 부분을 거꾸로 뒤집는게 디폴트지만, 일정 구간만 거꾸로 뒤집고 붙이는게 가능
// 컨 하면 모든 부분을 안뒤집는 것도 가능 
// s를 탐색해서 사전적의미 가장 작은 얘 찾으면 걔가 제일 앞으로 오도록 그 구간만 뒤집고 
// 나머지도 마찬가지 
// abfdsaazb
// 사전적 순서 동일하면 뒤에있는놈 기준으로 <= 이 뒤집기를 계속 반복하게 해야함
// 41분
var robotWithString = function (s) {
    const n = s.length
    const dp = Array(n)
    dp[n - 1] = s[n - 1]

    for (let i = n - 2; i >= 0; i--) {
        dp[i] = s[i] < dp[i + 1] ? s[i] : dp[i + 1]
    }

    dp.push("z")

    const result = []
    const stack = []

    for (let i = 0; i < n; i++) {
        stack.push(s[i])

        while (stack.length && stack[stack.length - 1] <= dp[i + 1]) {
            result.push(stack.pop())
        }
    }

    return result.join("")
};