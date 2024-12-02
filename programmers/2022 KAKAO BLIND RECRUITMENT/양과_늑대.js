// 양 최대한 많이 모으기. 늑대랑 수 같아지면 잡아먹힘

const p = 1,
  info = [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
  edges = [
    [0, 1],
    [1, 2],
    [1, 4],
    [0, 8],
    [8, 7],
    [9, 10],
    [9, 11],
    [4, 3],
    [6, 5],
    [4, 6],
    [8, 9],
  ];
// OutPut: 5
// 0은 양 1은 늑대 노드의 루트. 즉, 0번은 항상 0 === 양

// dp[i] = 노드 i에서 갈수 있는 노드 저장 dp[i] = [3, 4] or [] or [1]
// dp[0] 부터 탐색을 시작하는데, 양의 개수를 와 늑대의 개수를 가지고 새로 얻어서 비교 잘해야함.
// 걍 dfs 각이다.
function solution(info, edges) {
  // 각 노드의 자식 노드들을 저장하는 인접 리스트
  const children = Array.from({ length: info.length }, () => []);
  edges.forEach(([parent, child]) => {
    children[parent].push(child);
  });

  let maxSheep = 0;

  // dfs 함수: 현재 노드, 양의 수, 늑대의 수, 다음에 방문 가능한 노드들
  const dfs = (current, sheep, wolf, nextNodes) => {
    // 현재 노드의 동물 확인
    const newSheep = sheep + (info[current] === 0 ? 1 : 0);
    const newWolf = wolf + (info[current] === 1 ? 1 : 0);

    // 늑대가 양보다 많거나 같으면 불가능한 경우
    if (newWolf >= newSheep) return;

    // 최대 양 수 갱신
    maxSheep = Math.max(maxSheep, newSheep);

    // 다음에 방문할 수 있는 노드들 설정
    const newNextNodes = [...nextNodes];
    // 현재 노드의 자식들 추가
    children[current].forEach((child) => {
      if (!nextNodes.includes(child)) {
        newNextNodes.push(child);
      }
    });

    // 방문 가능한 모든 노드에 대해 재귀 호출
    for (let i = 0; i < newNextNodes.length; i++) {
      const nextNode = newNextNodes[i];
      const remainingNodes = newNextNodes.filter((_, index) => index !== i);
      dfs(nextNode, newSheep, newWolf, remainingNodes);
    }
  };

  // 루트 노드(0)부터 시작, 초기 양 0, 늑대 0, 다음 방문 가능 노드 []
  dfs(0, 0, 0, []);

  return maxSheep;
}

console.log(solution(info, edges));
