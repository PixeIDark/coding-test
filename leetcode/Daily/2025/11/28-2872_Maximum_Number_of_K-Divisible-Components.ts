// 간선을 제거해서 노드 밸류 총합이 k로 나누어떨어지는 트리를 최대한 많이 만들고 반환
// dfs로 왼쪽 오른쪽 탐색하고 탐색한 노드의 밸류가 k로 나누어 떨어지나 확인
// 나누어 떨어지지않으면 총합에 합쳐짐
// 48분
var maxKDivisibleComponents = function (n, edges, values, k) {
  // 엣지를 해당 노드에서 연결된 노드 정리
  const graph = Array.from({length: n}, () => [])

  for (const [start, end] of edges) {
    graph[start].push(end)
    graph[end].push(start)
  }

  // 들렸던 노드는 못들리게 set, 새로 들린 노드에의 밸류가 k로 나누어떨어지면 분리하고 총합에 더하지않음
  // k로 나누어떨어지지않지만 총합에 합쳐서 총합이 나누어떨어지면 분리

  const vis = new Set()
  let result = 0

  const dfs = (start) => {
    vis.add(start)
    let sum = values[start]

    for (const end of graph[start]) {
      if (vis.has(end)) continue
      sum += dfs(end)
    }

    if (sum % k === 0) {
      result++
      return 0
    }

    return sum % k
  }

  dfs(0, 0)

  return result
};