// 여정 재구성 어휘 순서는 최대한 앞에꺼

const tickets = [
  ["JFK", "SFO"],
  ["JFK", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "JFK"],
  ["ATL", "SFO"],
];
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.

// output은 ticket보다 1 김.
// 탐색을 할 때 알파벳 순으로 탐색해야겠군.
// 객체로 만들기
// [1] 오름차순으로 정렬 함수를 이용해서 탐색 완주 성공하면 [0]이 같으면 더 볼필요없음
// 오일러 회로의 법칙. 후위 기록을 통해 가장 깊은 str 먼저 기록
// 폐급 경로는 가장 먼저 기록되나, reverse를 통해 반전 가능.
var findItinerary = function (tickets) {
  // 그래프 생성 (사전순 정렬)
  const graph = {};
  for (const [from, to] of tickets) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }
  for (const from in graph) {
    graph[from].sort(); // 사전순 정렬
  }

  const result = [];

  // DFS 함수 정의
  function dfs(node) {
    while (graph[node] && graph[node].length > 0) {
      const nextDest = graph[node].shift(); // 가장 작은 사전순 목적지로 이동
      dfs(nextDest);
    }
    result.push(node); // 경로를 기록
  }

  // "JFK"에서 시작
  dfs("JFK");
  return result.reverse(); // 역순으로 반환
};

console.log(findItinerary(tickets));
// console.log("A:", "A".charCodeAt(), "Z:", "Z".charCodeAt()); // A: 65 Z: 90
