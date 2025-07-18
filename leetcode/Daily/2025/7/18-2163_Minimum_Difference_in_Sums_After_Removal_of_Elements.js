// 최대와 최소를 구해서 최소 - 최대
// 최대는 최소를 제거해서 구하고, 최소는 최대를 제거해서 구함
// 만약 n === 1 일때는 예외 케이스임
// 아니지 dp 에 [0]은 최소 [1]은 최대
// 각 dp 끼리 최소 - 최대 하면서 최소값을 갱신
// TODO: 벽
var minimumDifference = function (nums) {
    const n = nums.length

    if (n === 3) return Math.min(nums[1] - nums[2], nums[0] - nums[2], nums[0] - nums[1])

    const dp = Array.from({length: n / 3}, () => Array.from({length: 2}, (_, i) => i === 0 ? Infinity : -Infinity))

    for (let i = 2; i < n; i += 3) {
        const index = Math.floor(i / 3)

        dp[index][0] = Math.min(dp[index][0], nums[i] + nums[i - 1], nums[i] + nums[i - 2], nums[i - 1] + nums[i - 2])
        dp[index][1] = Math.max(dp[index][1], nums[i] + nums[i - 1], nums[i] + nums[i - 2], nums[i - 1] + nums[i - 2])
    }

    let result = Infinity
    for (let i = 1; i < n / 3; i++) {
        result = Math.min(result, dp[i - 1][0] - dp[i][1])
    }

    return result
};