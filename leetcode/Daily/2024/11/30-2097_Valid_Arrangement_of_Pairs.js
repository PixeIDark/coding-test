// 사이클 만들어라 start[1] === end[0]

const pairs = [
  [1, 2],
  [1, 3],
  [2, 1],
];
// Output: [[11,9],[9,4],[4,5],[5,1]]
// Explanation:
//     This is a valid arrangement since endi-1 always equals starti.
//     end0 = 9 == 9 = start1
// end1 = 4 == 4 = start2
// end2 = 5 == 5 = start3

// 9: 11
// 4: 9
// 5: 4
// 1: 5
// 첫 시작을 뭘로 할지가 관건.
// end !== start 인 start 가 첫시작
// obj[start] === undefined 가 첫 시작임
// end 가 똑같은 놈 나오면 어케 처리해? end = [start, start] ?
var validArrangement = function (pairs) {
  const graph = new Map();
  const outDegree = new Map();
  const inDegree = new Map();

  pairs.forEach((pair) => {
    const [start, end] = pair;
    if (!graph.has(start)) graph.set(start, []);

    graph.get(start).push(end);
    outDegree.set(end, (outDegree.get(end) || 0) + 1);
    inDegree.set(start, (inDegree.get(start) || 0) + 1);
  });

  let first = pairs[0][0];

  for (const key of graph.keys()) {
    const out = outDegree.get(key) || 0;
    const _in = inDegree.get(key) || 0;

    if (_in - out === 1) {
      first = key;
    }
  }

  const result = [];

  const dfs = (start) => {
    const queue = graph.get(start) || [];

    while (queue.length) {
      const next = queue.pop();
      dfs(next);
    }
    result.push([start]);
  };

  dfs(first);
  result.reverse();
  for (let i = 0; i < result.length - 1; i++) {
    result[i][1] = result[i + 1][0];
  }

  const last = result[result.length - 1][0];
  result[result.length - 1][1] = (graph.get(last) || []).pop();
  result.pop();

  return result;
};

console.log(validArrangement(pairs));
