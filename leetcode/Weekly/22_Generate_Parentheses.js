// 괄호 쌍 올바른 조합들 반환

const n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// 현재까지 카운팅한 "("의 개수보다 ")"이 많으면 잘못된거임
// 위 조건에 맞춰서 dfs 또는 스택
// 첫번째 인덱스는 무조건 "(" 시작
// 길이는 n * 2
// 18분
var generateParenthesis = function (n) {
    const parenthesis = ["(", ")"]
    const result = []

    const dfs = (curr, left, right) => {
        if (curr.length === n * 2) {
            result.push(curr)
            return
        }

        for (const p of parenthesis) {
            const newLeft = p === "(" ? left + 1 : left
            const newRight = p === ")" ? right + 1 : right
            if (newLeft > n) continue

            if (newLeft < newRight) break
            dfs(curr + p, newLeft, newRight)
        }
    }

    dfs("(", 1, 0)

    return result
};

console.log(generateParenthesis(n))