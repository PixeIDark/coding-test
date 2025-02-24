// 엘리스 노드 0 시작 => 최대 이익의 리프 노드, 밥 지정된 위치 시작 => 노드 0으로 이동(최단 경로로)
// 엘리스가 얻을 수 있는 최대 이익

const edges = [[0, 1], [1, 2], [1, 3], [3, 4]], bob = 3, amount = [-2, 4, 2, -4, 6]
// Output: 6

// edges 길이는 최대 노드 수의 -1 amount 는 최대 노드와 같음
// bob 의 움직임은 정해져있어. alice 의 움직임을 컨트롤 해야해.
// 트리노드는 항상 두개로 나뉨. 한개로 나뉠경우는 생각할 필요가 없음 리프노드 까지 가야하니까.
// 모든 길의 이득을 dp로 저장. bob 조심
var mostProfitablePath = function (edges, bob, amount) {
    const graphs = Array.from({length: edges.length + 1}, () => [])
    for (const [start, end] of edges) {
        graphs[start].push(end)
        graphs[end].push(start)
    }
    console.log("graphs:", graphs)
    // bob 경로를 인덱스, 시간을 요소로 담는 배열 필요해
    const bobTimes = Array(edges.length + 1).fill(Infinity)

    const runBob = (node, prevNode, time) => {
        if (node === 0) {
            bobTimes[node] = time
            return true
        }


        for (const nextNode of graphs[node]) {
            if (nextNode !== prevNode && runBob(nextNode, node, time + 1)) {
                bobTimes[node] = time
                return true
            }
        }

        return false
    }
    runBob(bob, -1, 0)
    console.log("bobTimes:", bobTimes)

    // 자기 전 노드를 기억하고, 이동 해야해. 한번 방문한 노드는 방문하지 말 것. 그 전에 경로 정리부터
    // 밥이 들린곳인지 확인 time 매개변수 가지고 다녀야해
    const bfs = (node, prevNode, income, time) => {
        let gain = 0
        if (time === bobTimes[node]) gain = amount[node] / 2
        else if (time < bobTimes[node]) gain = amount[node]

        income += gain

        if (graphs.length[node] === 1 && graphs[node][0] === prevNode) return income

        let nextIncome = -Infinity

        for (const nextNode of graphs[node]) {
            if (prevNode !== nextNode) {
                nextIncome = Math.max(nextIncome, bfs(nextNode, node, income, time + 1))
            }
        }

        return nextIncome === -Infinity ? income : nextIncome
    }
    return bfs(0, -1, 0, 0)
};

console.log(mostProfitablePath(edges, bob, amount))
// bob먹으로 ㄱㄱ