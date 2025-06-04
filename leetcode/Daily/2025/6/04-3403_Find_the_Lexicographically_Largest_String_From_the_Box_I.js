// 걍 길면 무조건 좋은거임
// 분할 가장 큰 거랑 뒤에있는 얘들 비교하면됨
// 51분
var answerString = function (word, numFriends) {
    if (numFriends === 1) return word

    const n = word.length
    const maxLength = n - numFriends + 1

    // i < n - maxLength 까지 검사함
    let largestStr = word.substring(0, maxLength)
    for (let i = 1; i < n - maxLength; i++) {
        const str = word.substring(i, i + maxLength)
        if (str > largestStr) largestStr = str
    }

    for (let i = n - maxLength; i < n; i++) {
        const str = word.substring(i, n)
        if (str > largestStr) largestStr = str
    }

    return largestStr
};