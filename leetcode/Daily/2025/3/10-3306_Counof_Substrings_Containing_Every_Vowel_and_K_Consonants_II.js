// 모음이 포함된 길이가 몇개인지 출력

const word = "ieaouqqieaouqq", k = 1
// Output: 3
// Explanation: The substrings with every vowel and one consonant are:
// word[0..5], which is "ieaouq".
// word[6..11], which is "qieaou".
// word[7..12], which is "ieaouq".

// 순회하면서 set에 넣고 set.size 5이상 이면 바로 set 초기화 하고 개수 업
var countOfSubstrings = function (word, k) {
    const obj = {
        "o": 1,
        "i": 1,
        "e": 1,
        "u": 1,
        "a": 1
    }
    let result = 0

    for (let i = 0; i < word.length; i++) {
        let max = 0
        const vowels = new Set()
        
        for (let j = i; j < word.length; j++) {
            const char = word[j]

            if (obj[char]) vowels.add(char)
            else max++

            if (vowels.size === 5 && max === k) result++

            if (max > k) break
        }
    }

    return result
};

console.log(countOfSubstrings(word, k));