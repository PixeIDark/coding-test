// t 번 문자열을 바꾼 후 최종 문자열의 길이 반환

const s = "abcyy", t = 2
// Output: 7

// 109 + 7.
// nlogn * t 로 풀면 절대 안될 거 같음
// z => ab 로 증식을 잘 계산해야함. a => ab 될려면 26번의 t 소모해야함
// a => ab => abbc => abbcbccd => abbcbccdbccdcddf
// 결국 횟수 반환이니까 횟수만 잘 세면됨 26번의 증식마다 * 2
// 즉 2 ^ (t / 26) 이 공식을 모든 char 에 한번씩 적용
// char 마다 초기값 차이는 (t + charCodeAt - 97 / 26) 보정을 줘서 해결
// t / 26 의 나머지는 어떻게 해야함??
// a의 경우는 몫이 몇이든 늘 1이고,
// a: 1 => 1 => 1 => 1 => 1 => 1
// b: 0 => 1 => 2 => 3 => 4 => 5
// c: 0 => 0 => 1 => 3 => 6 => 10
// d: 0 => 0 => 0 => 1 => 4 => 10
// f: 0 => 0 => 0 => 0 => 1 => 5 => 15
// 다음 char 의 개수 = 현재 char 의 개수 + 현재 char - 1 의 개수
// 2d dp 를 해야하냐?
// dp[0] 은 a 의 개수 모두 1임
// dp[1] 은 b 의 개수 dp[1][i] = dp[0][i-1] + dp[1][i-1]
// 공식은 dp[i][j] = (dp[i-1][j-1] ?? 0) + (dp[i][j-1] ?? 0)
// i 는 charCodeAt - 97
// j 는 t의 몫 0 부터 쭉 올라갸야함
// dp 다 만들면 이제 나머지 부터 26 - 나머지 까지 순회 돌면서 마지막 값의 요소 만큼 * 2 를 해줌
// 75분
var lengthAfterTransformations = function (s, t) {
    const MOD = 1e9 + 7
    const dp = new Int32Array(26)

    for (const char of s) {
        const idx = char.charCodeAt(0) - 97
        dp[idx]++
    }

    for (let i = 0; i < t; i++) {
        const zCount = dp[25]

        for (let j = 24; j >= 0; j--) dp[j + 1] = (dp[j] % MOD)

        dp[0] = zCount
        dp[1] = (dp[1] + zCount) % MOD
    }

    return dp.reduce((a, b) => (a + b) % MOD)
};

console.log(lengthAfterTransformations(s, t));

// 알파벳은 26개임 97 ~ 122
// const a = "a".charCodeAt(0)
// const z = "z".charCodeAt(0)
// console.log(a, z)
const a = 0
