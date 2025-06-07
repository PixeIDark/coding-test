// * 왼쪽에서 가장 작은 문자열 제거하기
// 여러개면 아무거나 삭제
// 여러개면 가장 오른쪽에 있는 것을 삭제하는게 합리적임
// dp charCode 로 저장
// 20분 s.split("") 박고 인덱스 제거해줘도됨
var clearStars = function (s) {
    const dp = Array.from({length: 26}, () => [])
    const deleteIdx = new Set()

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "*") {
            for (let j = 0; j < dp.length; j++) {
                if (dp[j].length) {
                    const index = dp[j].pop()
                    deleteIdx.add(index)
                    break
                }
            }
            deleteIdx.add(i)
            continue
        }

        const code = s[i].charCodeAt(0) - 97
        dp[code].push(i)
    }

    let result = ""

    for (let i = 0; i < s.length; i++) {
        if (!deleteIdx.has(i)) result += s[i]
    }

    return result
};

const arr = ["fdsa", "s", "", "", "", "fdsa"]
