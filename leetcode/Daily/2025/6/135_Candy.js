// 엄격한 오름차 내림차 정렬인 동안에는 사탕수가 끝없이 증가하고 끊기면 바로 1로 초기화
// [1,2,3,4,5,6] 총 사탕 개수는 = 21
// 오름차 내림차 구간의 길이를 구해서++ n * (n-1) / 2
// 동등 구간은 모두 1
// 일단 - 가 나와도 무시
// 전 요소가 현재 요소보다 크면 전요소 - 1
// 전 요소가 현재 요소보다 작으면 전요소 + 1
// 첫 인덱스부터 순환 1으로 시작함
// 1 미만 중 가장 작은 값을 기록해야함, 또한 누적합도 구함
// 최종에서 (1 - 가장 작은 값) * r.length 를 누적합에 더해줌
// 29분
var candy = function (ratings) {
    const n = ratings.length
    const dp = Array(n).fill(1)

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) dp[i] = dp[i - 1] + 1
    }

    let total = dp[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) dp[i] = Math.max(dp[i], dp[i + 1] + 1)
        total += dp[i]
    }

    return total
};