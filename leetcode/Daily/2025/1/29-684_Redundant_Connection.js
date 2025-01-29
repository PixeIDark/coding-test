// 사이클 없앨려면 빼야될 노드 출력  단 한개

const edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];
// Output: [1,4]

// 어떤 시작 노드 a 를 방문했는데 또 노드 a가 나오면 사이클
// 인덱스가 시작 요소가 도달점 이게 자료 정리
var findRedundantConnection = function (edges) {
  const parent = Array.from({ length: edges.length }, (_, i) => i);

  const find = (index) => {
    if (parent[index] !== index) {
      parent[index] = find(parent[index]);
    }
    return parent[index];
  };

  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX === rootY) {
      return false;
    }
    parent[rootX] = rootY;
    return true;
  };

  for (const [x, y] of edges) {
    if (!union(x, y)) return [x, y];
  }

  return true;
};

// var findRedundantConnection = (edges) => {
//     const graph = new Map();
//
//     // BFS를 사용하여 사이클 존재 여부 확인
//     function hasCycle(start, end) {
//         const queue = [start];
//         const visited = new Set();
//
//         while (queue.length) {
//             const node = queue.shift();
//             if (node === end) return true;
//             visited.add(node);
//
//             for (const neighbor of graph.get(node) || []) {
//                 if (!visited.has(neighbor)) {
//                     queue.push(neighbor);
//                 }
//             }
//         }
//         return false;
//     }
//
//     for (const [u, v] of edges) {
//         // 그래프에 노드 추가
//         if (!graph.has(u)) graph.set(u, new Set());
//         if (!graph.has(v)) graph.set(v, new Set());
//
//         // 간선을 추가하기 전에 사이클이 생기는지 확인
//         if (hasCycle(u, v)) return [u, v];
//
//         // 간선을 추가
//         graph.get(u).add(v);
//         graph.get(v).add(u);
//     }
//
//     return [];
// }
console.log(findRedundantConnection(edges));
