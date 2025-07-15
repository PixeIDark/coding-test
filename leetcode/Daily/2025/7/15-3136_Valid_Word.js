// 19분
var isValid = function (word) {
    if (word.length < 3) return false

    const vowels = new Set(["a", "A", "e", "E", "o", "O", "u", "U", "i", "I"])
    let isVowel = false
    let isConsonant = false

    for (const char of word) {
        const num = char.charCodeAt(0)

        if (!(num >= 48 && num <= 57 || num >= 65 && num <= 90 || num >= 97 && num <= 122)) return false

        if (vowels.has(char)) isVowel = true
        else if (num >= 65) isConsonant = true
    }

    return isVowel && isConsonant
};