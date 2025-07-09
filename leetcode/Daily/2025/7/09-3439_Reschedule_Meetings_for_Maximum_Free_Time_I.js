// 0 - 1
// 1 - 3
// 9 - 10
// k 는 회의 조정할수 있는 개수, eventTime 은 일정 범위
// 회의 휴식시간을 가장 길게 했을 시의 휴식시간 반환
// 크기가 eventTime + 1 인 배열 생성
// startTime, endTime 을 조회해서 일정이 있는 구간은 일정 고유 숫자로 표시, 없으면 0. 일정이 겹치지 않는다고 가정
// 공백이 가장 큰 구간을 기준점으로 삼아서 다른 일정을 k 횟수만큼 합치함
// 37분
var maxFreeTime = function (eventTime, k, startTime, endTime) {
    const n = endTime.length
    const dp = []

    for (let i = 0; i < n; i++) {
        const freeTime = startTime[i] - (endTime[i - 1] ?? 0)
        dp.push(freeTime)
    }

    dp.push(eventTime - endTime[n - 1])

    // 각 구간에서 왼쪽 오른쪽 k 소모해서 합쳐야함
    // dp 식으로 전진하면서 최대 합치 구간을 찾아야함
    let maxFree = 0
    let sum = 0

    for (let i = 0; i < n + 1; i++) {
        sum += dp[i]
        // i - k 범위 바깥은 빼줌
        sum -= dp[i - k - 1] ?? 0
        // 1 - 1 = dp[0]

        maxFree = Math.max(maxFree, sum)
    }

    return maxFree
};