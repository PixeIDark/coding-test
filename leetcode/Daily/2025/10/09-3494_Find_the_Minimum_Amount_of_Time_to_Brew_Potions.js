// 첫번째 물약은 당연히 0초에 생산시작. 그 후 두번째 물약부터 몇초에 시작할지 최적화를 잘 해야함
// 모든 마법사가 이전 물약 끝내는 시점이 지나고 다음 물약을 시작할 수 있다면, 단축 가능
// wizard[1][2] = wizard[0][3] 을 한 뒤, mana[1] * skill[2] 를 빼서
// 12
// 5 => 30 => 40 => 60
// 30 => 40 => 60 => 64  dp[i] = Math.max(dp[i + 1], )
// 걍 두번 0부터랑 뒤에서부터랑 순회 한번씩해서 시간 더 큰쪽으로
// 64분
var minTime = function (skill, mana) {
    const n = skill.length
    const m = mana.length
    const dp = Array(n + 1).fill(0)

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[j + 1] = Math.max(dp[j], dp[j + 1]) + skill[j] * mana[i]
        }
        // 내려가면서 dp[j] = dp[j + 1] - skill[j] * mana[i]
        for (let j = n - 1; j >= 0; j--) {
            dp[j] = dp[j + 1] - skill[j] * mana[i]
        }
    }

    return dp.at(-1)
};