// 요소는 도시이고, 도시는 다른곳과 연결되어있음 독립적인 것을 지방이라고하고, 지방이 몇개 존재하는지

const isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
// Output: 2

// 일단, 도시가 직접적이든 간접적이든 연결 상태를 볼 수 있는 그래프를 만들어야함
// [0] 기준 도시, [1] 연결된 도시
// 20분 isConnected[i][j] == isConnected[j][i] 이조건 안봐서 헛짓함
var findCircleNum = function (isConnected) {
    const n = isConnected.length;
    let result = n
    const vis = new Set()

    const dfs = (curr) => {
        vis.add(curr)

        for (let i = 0; i < n; i++) {
            if (isConnected[curr][i] === 0 || vis.has(i)) continue
            result--
            dfs(i)
        }

    }

    for (let i = 0; i < n; i++) {
        if (vis.has(i)) continue
        dfs(i)
    }

    return result
};

console.log(findCircleNum(isConnected));