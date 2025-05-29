// values 를 통해 equations 값 추측해서 query [0]/[1] 반환

const equations = [["a", "b"], ["b", "c"]], values = [2.0, 3.0],
    queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
// Explanation:
//     Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
// return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
// note: x is undefined => -1.0

// equation[0],[1] 에 없는 s 가 계산에 포함되면 -1.0 반환
// a / b = 2.0, a = 2.0b
// b / c = 3.0, c = b / 3.0
// 2.0b / b / 3.0 = 6.0b / b = 6
// 쿼리의 두 요소가 공통된 요소를 참조할 수 있어야해 답을 구하려면
// a = 2.0b, b = 3.0c a, = 6.0c
// (char) => [num, char] 형식으로 맵 저장
// 50분
var calcEquation = function (equations, values, queries) {
    const graph = new Map()
    const dictionary = new Set()

    for (let i = 0; i < equations.length; i++) {
        dictionary.add(equations[i][0])
        dictionary.add(equations[i][1])

        if (!graph.has(equations[i][0])) graph.set(equations[i][0], [[equations[i][1], values[i]]])
        else graph.get(equations[i][0]).push([equations[i][1], values[i]])

        if (!graph.has(equations[i][1])) graph.set(equations[i][1], [[equations[i][0], 1 / values[i]]])
        else graph.get(equations[i][1]).push([equations[i][0], 1 / values[i]])
    }
    console.log(dictionary)
    console.log(graph)

    const findValue = (curr, target, total) => {
        let result = -1

        const dfs = (curr, next, total, vis) => {
            if (curr === target) {
                result = total
                return
            }

            vis.add(curr)

            for (const [next, value] of graph.get(curr)) {
                if (vis.has(next)) continue
                dfs(next, target, total * value, vis)
            }

        }
        dfs(curr, target, total, new Set())

        return result
    }

    const result = []

    for (const [start, end] of queries) {
        if (!dictionary.has(start) || !dictionary.has(end)) {
            result.push(-1)
            continue
        }
        const value = findValue(start, end, 1)
        result.push(value)
    }

    return result
};

console.log(calcEquation(equations, values, queries))