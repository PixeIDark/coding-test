// 최대한 왼쪽 빌딩의 인덱스

const heights = [6, 4, 8, 5, 2, 7],
  queries = [
    [0, 1],
    [0, 3],
    [2, 4],
    [3, 4],
    [2, 2],
  ];
// Output: [2,5,-1,5,2]
// Explanation: In the first query, Alice and Bob can move to building 2 since heights[0] < heights[2] and heights[1] < heights[2].
//     In the second query, Alice and Bob can move to building 5 since heights[0] < heights[5] and heights[3] < heights[5].
//     In the third query, Alice cannot meet Bob since Alice cannot move to any other building.
//     In the fourth query, Alice and Bob can move to building 5 since heights[3] < heights[5] and heights[4] < heights[5].
//     In the fifth query, Alice and Bob are already in the same building.
//     For ans[i] != -1, It can be shown that ans[i] is the leftmost building where Alice and Bob can meet.
//     For ans[i] == -1, It can be shown that there is no building where Alice and Bob can meet.

// 엘리스와 밥 의 높이 중 최대 값 을 구함
// 그 이후의 인덱스 중 가장 작고, 최대 높이보다 높은 것
// 없으면 -1
// 최대 값이 인덱스도 더크면 작은 인덱스부터 시작
var leftmostBuildingQueries = function (heights, queries) {
  const n = heights.length;
  const m = queries.length;
  const result = Array(m).fill(-1);

  // 각 인덱스별로 지연된 쿼리를 저장할 배열
  const delayedQueries = Array.from({ length: n }, () => []);

  // 우선순위 큐 (높이 기준 최소 힙)
  const pq = new MinPriorityQueue();

  // Step 1: 즉시 처리 가능한 쿼리와 지연이 필요한 쿼리 분류
  queries.forEach(([alice, bob], queryIdx) => {
    // 1-1: 같은 건물에 있는 경우
    if (alice === bob) {
      result[queryIdx] = alice;
      return;
    }

    // 1-2: alice가 bob에게 직접 이동 가능한 경우
    if (alice < bob && heights[alice] < heights[bob]) {
      result[queryIdx] = bob;
      return;
    }

    // 1-3: bob이 alice에게 직접 이동 가능한 경우
    if (alice > bob && heights[alice] > heights[bob]) {
      result[queryIdx] = alice;
      return;
    }

    // 1-4: 직접 이동이 불가능한 경우 지연 처리
    const maxHeight = Math.max(heights[alice], heights[bob]);
    const maxIndex = Math.max(alice, bob);
    delayedQueries[maxIndex].push([maxHeight, queryIdx]);
  });

  // Step 2: 지연된 쿼리 처리
  for (let i = 0; i < n; i++) {
    // 2-1: 현재 건물보다 낮은 높이를 요구하는 쿼리 처리
    while (!pq.isEmpty() && pq.front().element[0] < heights[i]) {
      const [_, queryIdx] = pq.dequeue().element;
      result[queryIdx] = i;
    }

    // 2-2: 현재 인덱스의 지연된 쿼리들을 우선순위 큐에 추가
    delayedQueries[i].forEach((query) => {
      pq.enqueue(query, query[0]);
    });
  }

  return result;
};

console.log(leftmostBuildingQueries(heights, queries));
