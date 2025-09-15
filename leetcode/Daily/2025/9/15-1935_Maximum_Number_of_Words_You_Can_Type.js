// 1. text를 배열화 하고, 순회해서 카운팅
// 5분
var canBeTypedWords = function (text, brokenLetters) {
    const words = text.split(" ")
    let count = 0

    for (const word of words) {
        let canType = true

        for (const char of word) {
            if (brokenLetters.includes(char)) {
                canType = false
                break
            }
        }

        if (canType) count++
    }

    return count
};