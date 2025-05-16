// 해밍 거리가 1이고 group 이 다른 단어들로 이루어진 하위배열중 길이가 가장 큰 것 반환

const words = ["bab", "dab", "cab"], groups = [1, 2, 2]
// Output: ["bab","cab"]

// bfb dfb bab <= 0 에서 시작해서 1과 2 둘 중 하나의 단어만 선택할 수 있음. 이 선택지에 따라 결과도 바뀜
// 1. words 를 단어 길이에 따라 나눠서 정리 groups 도 단어 길이에 맞춰서 움직여야함
// 2. 그래프화 시킨다 두 단어로 짝지어진 구조로
// 3. bfs 구조로 이어나간다 조건까다롭게
// 그룹이 연속되면 안되는거였음
// 132분
var getWordsInLongestSubsequence = function (words, groups) {
    const hem = (a, b) => {
        let count = 0

        for (let i = 0; i < words[b].length; i++) {
            if (words[a][i] !== words[b][i]) count++

            if (count >= 2) break
        }

        return count === 1;
    }

    const dp = Array(words.length).fill(1)
    const prev = Array(words.length).fill(-1)

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < i; j++) {

            if (words[i].length !== words[j].length) continue

            if (groups[i] === groups[j]) continue;

            if (!hem(i, j)) continue

            if (dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1
                prev[i] = j
            }
        }
    }

    let maxLength = 0
    let endIndex = -1

    for (let i = 0; i < dp.length; i++) {
        if (maxLength < dp[i]) {
            maxLength = dp[i]
            endIndex = i
        }
    }

    const result = []

    while (endIndex !== -1) {
        result.unshift(words[endIndex])
        endIndex = prev[endIndex]
    }

    return result
};

console.log(getWordsInLongestSubsequence(words, groups));