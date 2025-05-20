// 문자열 디코딩하기

const s = "3[z]2[2[y]pq4[2[jk]e1[f]]]ef"
// Output: "abcabccdcdcdef"
//         "abcabccdcdcdef"

// 왼쪽부터 돌고 a 를 스택에 넣어
// 2[c] 도 스택에 넣음
// [c] 도 스택에 넣음
// 걍 흐름에 맡기자 모르것다
// 85분 혐오스러운 문제
var decodeString = function (s) {
    // 걍 dfs 임
    let k = 0

    const dfs = () => {
        let str = ""

        while (k < s.length && s[k] !== "]") {
            if (isNaN(s[k])) {
                str += s[k++]
                continue
            }
            let count = s[k++]

            while (!isNaN(s[k])) {
                count += s[k++]
                console.log("a")
            }

            k++
            const temp = dfs()
            k++
            str += temp.repeat(count)

        }
        return str
    }

    return dfs()
};

console.log(decodeString(s))