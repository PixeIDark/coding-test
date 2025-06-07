// 내 머리로는 조합론으로 못품 걍 그려보고 해야함
// 2차원 배열 만들어서 거기에 정리 numRows 마다 솟구치고 내려옴
// "abcdefghij" 4
// a     g
// b   f h
// c e   i
// d     j
// 45분
var convert = function (s, numRows) {
    if (numRows === 1) return s

    const n = s.length
    const dp = Array.from({length: numRows}, () => Array(n).fill("@"))

    let k = numRows - 1
    let y = 0
    let x = 0
    // % 써서 초기화 잘할수있음
    // y 는 0 1 2 1 0 1 2 1 0 1 2 상태 오름 내림 두개로 가능
    // x 는 0 0 0 1 2 2 2 3 4 4 4 <= numsRow - 2 패턴. 상태 달린다 걷기 두개로가능
    let isUp = true
    let stand = k
    let run = -1

    for (const char of s) {
        dp[y][x] = char
        if (isUp) y++
        else y--

        if (y === k) isUp = false
        else if (y === 0) isUp = true

        if (stand) stand--
        if (run >= 0) {
            x++
            run--
        }
        if (!stand) run = k - 1
        if (!run) stand = k
    }

    let result = ""

    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            if (dp[i][j] !== "@") result += dp[i][j]
        }
    }

    return result
};