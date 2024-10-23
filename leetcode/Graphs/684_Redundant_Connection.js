// 싸이클이 edges에 있는데 제거해서 정상 만들수 있는 간선 중 가장 마지막 간선을 출력

const edges = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 4],
  [1, 5],
];
// Output: [1,4]

// unions로 검열 후 arr에 올바르지 않은 얘들 추가
// 싸이클 발생 포착 후 당연히 마지막 간선에서 싸이클이 생김.
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

console.log(findRedundantConnection(edges));
