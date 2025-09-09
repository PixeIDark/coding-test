// delay => 비밀 공유 쿨타임, forget => 비밀 망각 주기, n => 제한 일수
// 비밀을 알고있는 사람의 수 반환
// 1. 일수를 세는 반복문을 하나 만든다.
// 2. 반복문안에 맵의 키를 순회하는 반복문을 만든다.
// 3. 맵을 순회하면서 기억삭제와 비밀추가를 함.
// 겹치면 기억삭제 후 비밀추가 순서임
// 값으로 일수 + delay 로 기한을 넣어줌, 순회하다가 기한넘은 얘들은 삭제함
// person: [delay, deadline]
// 아니다 dp로 풀어야함, 배열의 인덱스를 일수. 요소를 해당 일에 비밀 늘어난 개수
// 46분
var peopleAwareOfSecret = function (n, delay, forget) {
    const MOD = 1e9 + 7
    const dp = Array(n + 1).fill(0)
    let k = 0
    dp[1] = 1

    for (let i = 2; i < dp.length; i++) {
        k += (dp[i - delay] ?? 0) % MOD - (dp[i - forget] ?? 0) % MOD
        dp[i] = k
    }

    return dp.slice(dp.length - forget).reduce((a, b) => (a + b) % MOD, 0)
};