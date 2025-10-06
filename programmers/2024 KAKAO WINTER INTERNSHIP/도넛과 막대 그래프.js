// 생성된 정점 위치 파악해서, 전체 그래프 개수 파악.
// 도넛 = 전체 그래프 - 막대 - 팔자
// [정점노드, 도넛, 막대, 팔자]
// 노드마다 몇개가 나가고 몇개가 들어오는지 파악
// 배열x => 객체O
// 87분, 혐;
function solution(edges) {
    const nodes = new Map()

    for (const [start, end] of edges) {
        // start => end
        if (!nodes.has(start)) nodes.set(start, {in: 0, out: 0})
        nodes.get(start).out++

        if (!nodes.has(end)) nodes.set(end, {in: 0, out: 0})
        nodes.get(end).in++
    }

    let newNode = -1
    let 막대 = 0
    let 팔자 = 0

    for (const [num, node] of nodes) {
        // in x, out >= 2 이면 생성지점
        if (node.in === 0 && node.out >= 2) newNode = num
        // in >= 1, out x 막대
        if (node.in >= 1 && node.out === 0) 막대++
        // in >= 2, out >= 2 팔자
        if (node.in >= 2 && node.out >= 2) 팔자++
    }

    const total = nodes.get(newNode).out
    const 도넛 = total - 막대 - 팔자

    return [newNode, 도넛, 막대, 팔자]
}