// 모음인 요소들은 서로 위치 바꾸면서 정렬해서 s 반환
// 대문자 우선 정렬, a e i o u 순
// 1. s 에서 모음만 따로 꺼내서 stack에 푸시
// 2. 꺼내온 위치를 기억해서 순서대로 할당함
// 13분
var sortVowels = function (s) {
    // const str = ["e", "a", "O"].sort() // [ 'O', 'a', 'e' ]
    s = s.split("")
    const n = s.length
    const isVowel = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
    const location = []
    const vowels = []

    for (let i = 0; i < n; i++) {
        if (isVowel.has(s[i])) {
            location.push(i)
            vowels.push(s[i])
        }
    }

    vowels.sort()

    for (let i = 0; i < vowels.length; i++) {
        const index = location[i]
        const char = vowels[i]

        s[index] = char
    }

    // s += 방식이 더 빠름
    return s.join("")
};