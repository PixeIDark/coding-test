// 가장 강한 팀 찾기. 고유한 강자가 없으면 -1 출력 즉, 간선이 사이클이면 -1 출력

const n = 4,
  edges = [
    [0, 2],
    [1, 3],
    [1, 2],
  ];
// Output: -1
// Explanation: Team 2 is weaker than team 0 and team 1. Team 3 is weaker than team 1. But team 1 and team 0 are not weaker than any other teams. So the answer is -1.

// dp 만들고 해당하는 인덱스가 지는 얘들을 추가
// 자기 자신을 제외한 모두가 인덱스에 들어가면 해당 인덱스가 우승자
// 아무도 위의 조건을 만족하지 않으면 -1 출력
var findChampion = function (n, edges) {
  const losers = new Set();

  for (const [winner, loser] of edges) {
    losers.add(loser);
  }

  let champion = -1;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!losers.has(i)) {
      champion = i;
      count++;
    }

    if (count > 1) return -1;
  }

  return champion;
};

console.log(findChampion(n, edges));
