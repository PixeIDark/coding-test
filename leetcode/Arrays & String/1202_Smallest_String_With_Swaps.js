// 사전적의미로 가장 앞에있는거 반환

const s = "dcab", pairs = [[0, 3], [1, 2], [0, 2]]
// Output: "bacd"
// Explaination:
// Swap s[0] and s[3], s = "bcad"
// Swap s[1] and s[2], s = "bacd"

// 교환 가능한 위치 끼리 최선의 수를 둬야함
// 교환 가능한 위치를 하나로 붙이고, 이것을 가장 앞에있게 정렬 후 원래 인덱스로 다시 넣어주는거임
// 그룹으로 묶어서 위의 작업을 해야함 연결이 안된 노드라 생각하고
// 1. 무향 그래프로 pairs 를 정리하기
// 2. 그래프를 순회하면서 2차 배열 형식으로 그룹을 만들어주기, 그래프에 들어있지 않은 인덱스들은 다른 그룹에 정리해두기
// 3. 해당 그룹별로 정렬을 시키고, [char, index] 구조로 모든그룹을 flat 으로 묶어주기
// 4. 배열을 인덱스 순으로 정렬 후 s 완성시키기
// 45분
var smallestStringWithSwaps = function (s, pairs) {
    const n = s.length
    const graph = Array.from({length: n}, () => [])

    for (const [a, b] of pairs) {
        graph[a].push(b)
        graph[b].push(a)
    }


    const vis = new Set()
    const charGroups = []
    const indexGroups = []

    const dfs = (curr, charGroup, indexGroup) => {
        if (vis.has(curr)) return

        vis.add(curr)
        charGroup.push(s[curr])
        indexGroup.push(curr)

        for (const next of graph[curr]) {
            dfs(next, charGroup, indexGroup)
        }
    }

    for (let i = 0; i < n; i++) {
        if (vis.has(i)) continue
        let charGroup = []
        let indexGroup = []
        dfs(i, charGroup, indexGroup)

        charGroups.push(charGroup)
        indexGroups.push(indexGroup)
    }

    // 소외된 인덱스들 그룹화 => 안해도 알아서 length === 1 상태로 groups 에 들어감
    // char 그룹이랑 인덱스 그룹을 나누고 char 그룹 정렬 후 인덱스 그룹처럼 넣어라
    const result = Array(n)

    for (let i = 0; i < charGroups.length; i++) {
        const sorted = charGroups[i].sort()
        indexGroups[i].sort((a, b) => a - b)

        for (let j = 0; j < indexGroups[i].length; j++) {
            result[indexGroups[i][j]] = sorted[j]
        }
    }

    return result.join("")
};

console.log(smallestStringWithSwaps(s, pairs))