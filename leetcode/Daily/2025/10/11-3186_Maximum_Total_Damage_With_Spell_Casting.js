// 최대 피해량 반환
// power에 있는 주문은 한번씩만 사용가능
// power[i] 선택 시 power[i] +- 2, power[i] +- 1 인 요소는 더 이상 못고름
// 빈도수 저장.
// power 높은 요소부터 빈도수 * power[i]로 합 구하기
// power[i] - 1,2 도 마찬가지로 * 빈도수로 합 구해서
// power 겹치는거 없이 제작하기, dp[i]... 해당 값을 픽했을 때와 픽하지 않았을 떄의 이득 비교 해서 선택
// 31분
var maximumTotalDamage = function (power) {
    const freq = new Map()
    const arr = []

    for (const p of power) {
        if (!freq.has(p)) {
            freq.set(p, 1)
            arr.push(p)
        } else freq.set(p, freq.get(p) + 1)
    }

    arr.sort((a, b) => a - b)

    const dp = Array(arr.length).fill(0)
    dp[0] = arr[0] * freq.get(arr[0])

    for (let i = 1; i < arr.length; i++) {
        let pick = arr[i] * freq.get(arr[i])
        let dump = dp[i - 1]

        // dp[1]과 dp[3]의 최소 차이는 2임 dp[4]는 3, dp[i - 3]까지 조건만으로 충분 반복문없이
        if (arr[i] > arr[i - 1] + 2) pick += dp[i - 1]
        else if (i - 2 >= 0 && arr[i] > arr[i - 2] + 2) pick += dp[i - 2]
        else if (i - 3 >= 0) pick += dp[i - 3]

        dp[i] = Math.max(pick, dump)
    }

    return dp.at(-1)
};