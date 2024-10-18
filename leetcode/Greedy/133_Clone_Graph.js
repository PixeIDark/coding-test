// 그래프 깊은 복사본 만들기

// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

function _Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

// 순회하면서 new Node들가서 생성하면되지않냐?
// dfs로 ㄱㄱ
var cloneGraph = function (node) {
  if (!node) return null;
  let map = new Map();

  const bt = (original) => {
    if (map.has(original.val)) return map.get(original.val);

    const clone = new _Node();
    clone.val = original.val;
    map.set(original.val, clone);

    for (const neighbor of original.neighbors) {
      clone.neighbors.push(bt(neighbor));
    }
    return clone;
  };

  return bt(node);
};

console.log(nodes[0]);
