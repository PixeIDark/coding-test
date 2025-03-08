// B를 k 개 연속된 지점 최소한으로 W 변경해서 반환

const blocks = "WBBWWBBWBW", k = 7
// Output: 3
// Explanation:
//     One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
// so that blocks = "BBBBBBBWBW".
//     It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
//     Therefore, we return 3.

// WB 패턴 마다 temp 배열에 넣고, 이전 배열인 arr 배열과 비교
// dfs
var minimumRecolors = function (blocks, k) {
    let result = Infinity

    for (let i = 0; i < blocks.length - k + 1; i++) {
        let count = 0

        for (let j = i; j < i + k; j++) {
            if (blocks[j] === "W") count++
        }

        result = Math.min(result, count)
        if (result === 0) break
    }

    return result
};

console.log(minimumRecolors(blocks, k));