// 유효한 트리인지, 트리의 length는 n이여야하며, 간선의 개수는 n-1, 사이클이 없어야 하며, 모든 노드가 연결되어야함

const n = 5;
edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
];
// Output: false

// dfs 방식 시간 복잡도 노드 + 간선
const validTree = (n, edges) => {
  if (edges.length !== n - 1) return false;

  const graphs = Array.from({ length: n }, () => new Array());
  const vis = new Array(n).fill(0);

  for (const [prev, next] of edges) {
    graphs[prev].push(next);
    graphs[next].push(prev);
  }

  const dfs = (node, parent) => {
    vis[node]++;

    for (const next of graphs[node]) {
      if (next === parent) continue;

      if (vis[next]) return false;

      if (!dfs(next, node)) return false;
    }
    return true;
  };

  if (!dfs(0, -1)) return false;

  return true;
};
// 유니온 파인드 방식. 시간 복잡도 애커먼 함수로 거의 상수
// const validTree = (n, edges) => {
//   if (edges.length !== n - 1) return false;

//   const parent = Array.from({ length: n }, (_, i) => i);

//   const find = (x) => {
//     if (parent[x] !== x) {
//       parent[x] = find(parent[x]);
//     }
//     return parent[x];
//   };

//   const union = (x, y) => {
//     const rootX = find(x);
//     const rootY = find(y);

//     if (rootX !== rootY) {
//       parent[rootY] = rootX;
//       return true;
//     }
//     return false;
//   };

//   for (const [x, y] of edges) {
//     if (!union(x, y)) return false;
//   }

//   return true;
// };

console.log(validTree(n, edges));
