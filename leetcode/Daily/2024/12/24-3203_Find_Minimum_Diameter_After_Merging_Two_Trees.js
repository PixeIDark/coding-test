// 트리 두 개 최소 값 합쳣을 때 직경

const edges1 = [
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  edges2 = [[0, 1]];
// Output: 3
// Explanation: We can obtain a tree of diameter 3 by connecting node 0 from the first tree with any node from the second tree.

// 최소 직경을 가진 노드를 찾고 두 트리를 합치자.
var minimumDiameterAfterMerge = function (edges1, edges2) {
  function diameter(edges) {
    const n = edges.length;
    const graph = Array.from({ length: n + 1 }, () => []);

    // 인접 리스트 구축
    for (const [n1, n2] of edges) {
      graph[n1].push(n2);
      graph[n2].push(n1);
    }

    let maxDiameter = 0;

    // DFS로 최대 지름 계산
    const dfs = (node, parent) => {
      let maxLength = 0;
      for (const next of graph[node]) {
        if (next === parent) continue;
        const subLength = dfs(next, node) + 1;
        maxDiameter = Math.max(maxDiameter, maxLength + subLength);
        maxLength = Math.max(maxLength, subLength);
      }
      return maxLength;
    };

    dfs(0, -1);
    return maxDiameter;
  }

  const dia1 = diameter(edges1);
  const dia2 = diameter(edges2);

  // 최소 지름 계산: max(트리1 지름, 트리2 지름, 각 반지름 합 + 1)
  return Math.max(dia1, dia2, Math.ceil(dia1 / 2) + Math.ceil(dia2 / 2) + 1);
};

console.log(minimumDiameterAfterMerge(edges1, edges2));
