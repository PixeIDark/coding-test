// char 하나씩 스택에 넣음
// 스택의 마지막 - 2, 마지막 - 1, 마지막 이같으면 pop
// 넣지말고 분기처리 할수도 있음
// 9분
var makeFancyString = function (s) {
    let result = []

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        const n = result.length - 1

        if (char === result[n] && result[n] === result[n - 1]) continue
        result.push(char)
    }

    return result.join("")
};