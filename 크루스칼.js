// 여러 값을 가진 간선들을 조건을 따져서 하나의 간선으로 통힐할 때 쓰는 알고리즘 [a, b, value]
// 유니온 파인드의 응용형. 각 부모는 랭크를 가지며 랭크가 낮은 부모는 높은 부모에게 편입시킴
// 간선을 조건에 따라 정렬하고 유니온 파인드로 통합
const parent = Array.from({length: 10}, (_, i) => i)
const rank = Array(10).fill(0)

const find = (parent, curr) => {
    if (parent[curr] === curr) return curr
    return parent[curr] = find(parent, parent[curr])
}

const union = (parent, a, b) => {
    a = find(parent, a)
    b = find(parent, b)

    if (a === b) return false // 부모가 같은 경우 사이클 방지

    if (rank[a] < rank[b]) parent[a] = b
    else if (rank[b] > rank[a]) parent[b] = a
    else {
        parent[b] = a
        rank[a]++
    }

    return true
}