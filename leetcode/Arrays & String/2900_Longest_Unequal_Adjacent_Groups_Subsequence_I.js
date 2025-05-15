// 연속된 하위 배열 중 groups 의 규칙을 만족하는 가장 긴 배열 반환

const words = ["a", "b", "c", "d"], groups = [1, 0, 1, 1]
// Output: ["e","b"]
// Explanation: A subsequence that can be selected is ["e","b"] because groups[0] != groups[2]. Another subsequence that can be selected is ["a","b"] because groups[1] != groups[2]. It can be demonstrated that the length of the longest subsequence of indices that satisfies the condition is 2.

// groups 를 순회해서 인덱스를 저장하는 배열을 만듬
// 배열에 푸시하기 위해선 0-1-0 번갈아가면서 되어야함
// 11분
var getLongestSubsequence = function (words, groups) {
    const arr = [words[0]]
    let state = groups[0]

    for (let i = 1; i < groups.length; i++) {
        if (groups[i] !== state) {
            arr.push(words[i])
            state = groups[i]
        }
    }

    return arr
};


console.log(getLongestSubsequence(words, groups))