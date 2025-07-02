// 반복된 char 제거해서 word의 길이가 k 이상이 될수 있는 가짓 수 출력
// aaa, abb, aab, aabb, aaabb, aaabbb, abbb, bbb <= 중복은 제외하나봄
// k 가 word.length 보다 클 경우 0, 같으면 1
// 길이 dp, 길이가 늘어날때마다 해시맵에 있는 char를 조회해서 가짓수를 판단
// word = "aaabbb", k = 3
// 2d-dp, [i]를 연속된 구간의 개수로 두고, [j]는 길이 최대 word.length
// dp[i][j] = 이전 길이 + 현재 길이, 각 길이를 원본 길이에 따라 최대치 제한을 줘야함
// 그러기 위해 배열에 원본 길이들을 저장해놔야함 i 번호를 따라가서
// TODO: 벽, 메모리 폭발.
var possibleStringCount = function (word, k) {
    // 1. 원본 길이 기록하기
    const MOD = 1e9 + 7
    const n = word.length
    const lengths = []
    let count = 1

    for (let i = 1; i < n; i++) {

        if (word[i - 1] !== word[i]) {
            lengths.push(count)
            count = 0
        }
        count++
    }

    if (count !== 0) lengths.push(count)

    // 2. dp 만들기 i === lengths.length, j === word.length
    const dp = Array.from({length: lengths.length}, () => Array(n + 1).fill(0))


    for (let j = 1; j <= lengths[0]; j++) {
        dp[0][j] = 1
    }

    // 3. 중첩 포문으로 lengths 조회 로 제한하면서 dp 진행하기
    for (let i = 1; i < lengths.length; i++) {
        for (let take = 1; take <= lengths[i]; take++) {
            for (let prevLen = i; prevLen <= n; prevLen++) {
                if (prevLen + take <= n && dp[i - 1][prevLen] > 0) {
                    dp[i][prevLen + take] = (dp[i][prevLen + take] + dp[i - 1][prevLen]) % MOD
                }
            }
        }
    }

    let result = 0;

    for (let j = k; j <= n; j++) {
        result = (result + dp[lengths.length - 1][j]) % MOD
    }
    // 4. 모듈화 하기

    return result;
};