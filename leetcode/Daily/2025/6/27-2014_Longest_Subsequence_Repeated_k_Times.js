// k 번 반복되는 가장 긴 부분수열 반환 여러개면 사전순 가장 큰 것으로
// 일단 char 개수를 카운팅했을 때 조합을 편성할려면 k 개 이상인 char로만 str 을 형성할 수 있음
// 그리고 한 번 쓰인 얘들은 재사용 불가능이므로 [Char]--
// k 개 이상인 char 들로 s 를 재편성 k 개 이상이 없으면 "" 반환
// letleete k 개 와 k 개의 배수로 이루어진 char만 의미가 있음 다시 편성
// letleete k 개의 배수 / k 만큼 사용 가능 한 단어에 문제는 위치
// eeetllet eet 가 가능한지? 불가능이라고 가정 한 시퀸스를 만들면 다음 인덱스에서 시작해야함
// 일단 최장 길이는 k 개의 개수 + 배수들 / k
// 백트래킹으로 str을 붙여가면서 해시맵의 카운팅을 조회해서 가능성이 있는지 빠르게 파악
// 불가능하면 바로 종료 다음 인덱스로 넘어감 여기서 인덱스 위치에 따라 카운팅은 계속 해줘야함
// 최종적으로 가능하면 배열에 집어넣음 만약, 길이가 모자르면 조기 종료
// 63분
var longestSubsequenceRepeatedK = function (s, k) {
    // 1. K 개 이상인 char로 해시맵 만들기 또는 배열로
    // 동시에 k 개 미만은 제외하기 흠 배열 두번 돌아야함
    const digits = Array(26).fill(0)

    for (const char of s) {
        const index = char.charCodeAt(0) - 97
        digits[index]++
    }

    for (let i = 0; i < 26; i++) {
        digits[i] = Math.floor(digits[i] / k)
    }
    // 2. 백트래킹 함수 만들기
    // z 부터 우선적으로 단어를 만들어봄
    // 가장 짧은 길이부터 도달하니까 최대 길이 갱신을 통해 조기 종료해야함
    let maxLength = 0
    let result = ""

    const bk = (str) => {
        // 해당 str 이 반복가능한지 검사해야함 되면은 maxLength 갱신
        if (canRepeat(str) && maxLength < str.length) {
            result = str
            maxLength = str.length
        }

        for (let i = 25; i >= 0; i--) {
            if (!digits[i]) continue

            const char = String.fromCharCode(i + 97)
            digits[i]--
            bk(str + char)
            digits[i]++
        }
    }

    // 3. str 반복가능한지 알려주는 함수 만들기
    function canRepeat(str) {
        if (!str.length) return true

        let t = 0
        let b = 0
        let count = 0

        // b에서 를 가지고 계속 돌아야함
        while (t < s.length && count <= k) {

            while (b < str.length && t < s.length) {
                if (s[t] === str[b]) {
                    b++
                }
                t++
                // t를 증가시키는 방향으로
            }
            if (b === str.length) {
                count++
                b = 0
            }

        }

        return count >= k
    }

    bk("")
    // bfs 가 더 빠를수도
    return result
};