// 가장 자주 나오는 모음과 자음의 합 출력
// 맵 두개 각각 모음 자음용으로 만듬
// 5분
var maxFreqSum = function (s) {
    const isVowel = (char) => "aeiou.".includes(char)
    const vowels = new Map()
    const consonants = new Map()

    for (const char of s) {
        if (isVowel(char)) vowels.set(char, (vowels.get(char) ?? 0) + 1)
        else consonants.set(char, (consonants.get(char) ?? 0) + 1)
    }

    return Math.max(...vowels.values(), 0) + Math.max(...consonants.values(), 0)
};