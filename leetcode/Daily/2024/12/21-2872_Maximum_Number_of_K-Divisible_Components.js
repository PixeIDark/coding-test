// k로 나누어 떨어져야함 집합체들은 최대로 나눠라

const n = 7,
  edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [2, 6],
  ],
  values = [3, 0, 6, 1, 5, 2, 1],
  k = 3;
// Output: 2
// Explanation: We remove the edge connecting node 1 with 2. The resulting split is valid because:
//     - The value of the component containing nodes 1 and 3 is values[1] + values[3] = 12.
//     - The value of the component containing nodes 0, 2, and 4 is values[0] + values[2] + values[4] = 6.
// It can be shown that no other valid split has more than 2 connected components.

//
var maxKDivisibleComponents = function (n, edges, values, k) {
  const dp = Array.from({ length: n }, () => []);

  edges.forEach(([start, end]) => {
    dp[start].push(end);
    dp[end].push(start);
  });

  let result = 0;

  const bfs = (node, parent) => {
    let sum = values[node];

    for (const child of dp[node]) {
      if (child !== parent) sum += bfs(child, node);
    }

    if (sum % k === 0) result++;

    return sum;
  };
  bfs(0, -1);

  return result;
};

console.log(maxKDivisibleComponents(n, edges, values, k));
