// 만들 수 있는 펜린드롬의 최대 길이

const words = ["cc", "ll", "xx"]
// Output: 6
// Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
// Note that "clgglc" is another longest palindrome that can be created.

// gg 같은 [0], [1] 같은 얘들은 찾으면 +2 카운트
// lc 는 키에 저장하고 cl 턴 때, 앞뒤 바꾼것과 정상+1 중 Math.min 으로 카운팅하고 제거
// 21분
var longestPalindrome = function (words) {
    const map = new Map()
    let count = 0

    for (const [l, r] of words) {
        const word1 = l + r
        const word2 = r + l

        if (map.get(word2) > 0) {
            map.set(word2, map.get(word2) - 1)
            count += 4
        } else map.set(word1, (map.get(word1) ?? 0) + 1)
    }

    for (const [[l, r], value] of map) {
        if (l === r && value > 0) {
            count += 2
            break
        }
    }

    return count
};

console.log(longestPalindrome(words));