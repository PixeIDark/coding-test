// query 에 따른 최소 이동 거리 출력: arr

const n = 5,
  queries = [
    [2, 4],
    [0, 2],
    [0, 4],
  ];
// Output: [3,2,1]

// [0,1,1,2,3] 3
// dp 구조 만들고, 인덱스에다가 해당 인덱스가 어디로 연결 되는지 기록.
// 1. dp 에 해당 query 데이터 넣기
// 2. 인덱스까지 도달하는데 [최소 횟수, ...연결된 인덱스들]
var shortestDistanceAfterQueries = function (n, queries) {
  // 인접 리스트로 그래프 초기화
  const graph = Array.from({ length: n }, () => new Set());

  // 초기 도로 설정 (i -> i+1)
  for (let i = 0; i < n - 1; i++) {
    graph[i].add(i + 1);
  }

  // BFS로 최단 경로 찾기
  function findShortestPath() {
    const queue = [[0, 0]]; // [노드, 거리]
    const visited = new Set([0]);

    while (queue.length > 0) {
      const [node, dist] = queue.shift();

      if (node === n - 1) return dist;

      for (const next of graph[node]) {
        if (!visited.has(next)) {
          visited.add(next);
          queue.push([next, dist + 1]);
        }
      }
    }

    return Infinity;
  }

  // 각 쿼리 처리
  const answer = [];
  for (const [u, v] of queries) {
    graph[u].add(v);
    answer.push(findShortestPath());
  }

  return answer;
};
console.log(shortestDistanceAfterQueries(n, queries));
