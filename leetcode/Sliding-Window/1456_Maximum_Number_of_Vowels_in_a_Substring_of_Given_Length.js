// k 범위 내 모음 최대 개수

const s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// 1. k 크기의 윈도우를 처음에 포문 돌면서 만듬. 모음 카운트하면서
// 2. 크기를 유지한채로 슬라이딩. 모음 개수 +- 함
// 3. 최대 모음 개수 반환
// 10분
var maxVowels = function (s, k) {
    const set = new Set(["a", "e", "i", "o", "u"])
    let max = 0

    for (let i = 0; i < k; i++) {
        if (set.has(s[i])) max++
    }

    let count = max

    for (let left = 0, right = k; right < s.length; left++, right++) {
        if (max === k) break
        if (set.has(s[right])) count++
        if (set.has(s[left])) count--

        max = Math.max(max, count)
    }

    return max
};

console.log(maxVowels(s, k));