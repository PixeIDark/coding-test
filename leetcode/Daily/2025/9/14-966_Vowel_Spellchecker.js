// 정확히 일치하면 해당 단어 반환
// 대소문자나 모음이 다르면 가장 처음 등장한 단어로 반환
// 일치하는 거 없으면 빈 문자열 반환
// 우선순위를 만들어야함
// wordlist를 조회해서 같은 수의 알파벳이 들어가있는 것들 중 가장 앞에있는 단어가 뭔지를 정리해야함
// wordlist.some()로 query와 일치하는지 검사 후 존재하면 그대로 반환 아니면 첫번째 우선순위 반환
// 1. key: 모음인 부분을 제거한 word, value: 첫번째 우선순위 단어 맵 자료 만들기.
// => .has로 존재하면 컨티뉴(순차적으로 돌기때문에 .has === false 이면 첫 우선순위가 됨)
// 2. queries 반복문으로 돌려서 query를 wordlist에서 조회 없을 시, 맵 자료구조 조회 없으면 공백반환
// 30분
var spellchecker = function (wordlist, queries) {
    const map = new Map()
    const isVowel = (char) => "aeiouAEIOU".includes(char)

    for (const word of wordlist) {
        let newWord = ""

        for (const char of word) {
            if (!isVowel(char)) newWord += char
            else newWord += "*"
        }

        if (!map.has(newWord.toLowerCase())) map.set(newWord.toLowerCase(), word)
    }

    const result = []

    for (const query of queries) {
        if (wordlist.some(x => x === query)) {
            result.push(query)
            continue
        } else if (wordlist.some(x => x.toLowerCase() === query.toLowerCase())) {
            result.push(wordlist.find(x => x.toLowerCase() === query.toLowerCase()))
            continue
        }

        let newWord = ""

        for (const char of query) {
            if (!isVowel(char)) newWord += char
            else newWord += "*"
        }

        if (map.has(newWord.toLowerCase())) {
            result.push(map.get(newWord.toLowerCase()))
            continue
        }


        result.push("")
    }

    return result
};