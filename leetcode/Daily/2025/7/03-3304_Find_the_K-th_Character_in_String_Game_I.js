// a => ab
// dd => dede
// 문자가 두개로 늘어남. 하나의 문자열이 현재의 문자와 다음문자가 붙은 형태로 치환됨
// z => a 로 변환됨
// 와일 반복문으로 문자열을 k 이상일때까지 계속 늘림
// 53분
var kthCharacter = function (k) {
    let total = "ab"
    let prev = "b"

    while (total.length <= k) {
        let curr = ""

        for (const char of prev) {
            const num = (char.charCodeAt(0) - 97) % 25
            const next = String.fromCharCode(num + 98)

            curr += char + next
        }

        total += curr
        prev = curr
    }

    return total[k - 1]
};