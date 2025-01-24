// 출구 없으면 터미널 노드고, 모든 출구가 터미널 노드인 노드는 안전 노드임 안전노드 오름차순으로 출력

const graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
// Output: [2,4,5,6]
// Explanation: The given graph is shown above.
//     Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
//     Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.

// 노드 순회 하다가 출구 있는 노드면 경로 따라가 보고 터미널 이면 넣고 아니면 넣지마라
// 노드 순회 중 출구 없는 노드면 바로 넣어라
// 0 1 2 3 4
// [0, ]
// 순환 여부가 아닌얘들 넣으면 돼ㅣ 걍
var eventualSafeNodes = function (graph) {
  const result = [];
  const vis = Array(graph.length).fill(0);

  const bfs = (node) => {
    if (vis[node] === 1) return false;

    if (vis[node] === 2) return true;

    vis[node] = 1;

    for (const next of graph[node]) {
      if (!bfs(next)) return false;
    }

    vis[node] = 2;
    return true;
  };

  for (let i = 0; i < graph.length; i++) {
    if (bfs(i)) result.push(i);
  }

  return result;
};

console.log(eventualSafeNodes(graph));
