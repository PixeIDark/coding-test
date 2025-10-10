// "aya", "ye", "woo", "ma"
// 입력에 위의 4가지 단어를 조합해서 발음 가능한 단어가 몇개 있는지 출력
// set에 넣고 2에서 3까지 잘라서 있나 비교
// 20분
function solution(babbling) {
    const shouts = new Set(["aya", "ye", "woo", "ma"])
    let result = 0

    for (const word of babbling) {
        let i = 0
        let canWord = 1

        while (i < word.length) {
            if (shouts.has(word.substring(i, i + 2))) i += 2
            else if (shouts.has(word.substring(i, i + 3))) i += 3
            else {
                canWord = 0
                break
            }
        }

        result += canWord
    }

    return result
}