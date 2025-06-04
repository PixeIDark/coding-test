// 키 없어서 접긑 못하는 상자 따로 저장해둠
// 키가 1로 바뀌는 순간 해당 상자를 스택에 넣어서 쭉 진행함 bfs ㄱㄱ
// 키가 0이면 스택에 넣지 않고 캔슬 키가 1이면 스택에 넣음
// 31분
var maxCandies = function (status, candies, keys, containedBoxes, initialBoxes) {
    const n = status.length
    const vis = Array(n).fill(0)
    const hasKeys = Array(n).fill(false)
    const stack = [...initialBoxes]
    let total = 0

    while (stack.length) {
        const i = stack.pop()

        if (vis[i] === 2) continue

        vis[i] = 1

        if (status[i] === 0 && !hasKeys[i]) continue

        total += candies[i]
        vis[i] = 2

        for (const key of keys[i]) {
            if (!hasKeys[key]) {
                hasKeys[key] = true
                if (vis[key] === 1) {
                    stack.push(key)
                }
            }
        }

        for (const box of containedBoxes[i]) {
            if (vis[box] === 0) {
                stack.push(box)
            }
        }
    }

    return total
};