// 싸이클 이면 -1 아니면, 최대 간선 길이 + 1 출력

const n = 6,
  edges = [
    [1, 2],
    [1, 4],
    [1, 5],
    [2, 6],
    [2, 3],
    [4, 6],
  ];
// Output: 4
// Explanation: As shown in the image we:
//     - Add node 5 to the first group.
// - Add node 1 to the second group.
// - Add nodes 2 and 4 to the third group.
// - Add nodes 3 and 6 to the fourth group.
//     We can see that every edge is satisfied.
//     It can be shown that that if we create a fifth group and move any node from the third or fourth group to it, at least on of the edges will not be satisfied.

// 설명이 너무 어렵다..
var magnificentSets = function (n, edges) {};
