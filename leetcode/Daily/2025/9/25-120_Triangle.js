// 트라이앵글 인접 인덱스로 계속 이동하면서 합 구함. 최소값 반환
// 모든 수를 다 동원해야함 결론은 dfs로 모든 경로를 추적해봐야함
// tle, dp ㄱㄱ
// 21분
var minimumTotal = function (triangle) {
    const n = triangle.length
    const dp = triangle[n - 1].slice()

    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
        }
    }

    return dp[0]
};