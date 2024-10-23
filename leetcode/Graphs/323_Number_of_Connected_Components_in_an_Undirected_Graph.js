// 독립적인 연결체 몇개인지 출력

const n = 6,
  edges = [
    [0, 1],
    [2, 3],
    [4, 5],
    [1, 2],
    [3, 4],
  ];

// Output: 1;

// edges가 정렬되어있다는 가정하에 ㄱㄱ
// 싸이클도 가능하군.
// 유니온 ㄱㄱ
var countComponents = function (n, edges) {
  const parent = Array.from({ length: n }, (_, i) => i);

  const find = (index) => {
    if (parent[index] !== index) {
      return (parent[index] = find(parent[index]));
    }
    return parent[index];
  };

  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX !== rootY) {
      parent[rootY] = rootX;
    }
  };

  for (const [x, y] of edges) {
    union(x, y);
  }

  const result = new Set();
  for (let i = 0; i < parent.length; i++) {
    result.add(find(i));
  }

  return result.size;
};

console.log(countComponents(n, edges));
