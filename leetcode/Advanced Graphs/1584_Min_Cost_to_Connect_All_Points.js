// 한붓 그리기

const points = [
  [0, 0],
  [2, 2],
  [3, 10],
  [5, 2],
  [7, 0],
];
// Output: 20
// Explanation: We can connect the points as shown above to get the minimum cost of 20.
// Notice that there is a unique path between every pair of points.

// 일단 가장 가까운 것들끼리 이어준다음에 마지막 점은 연결하지 마셈.
// prim 알고리즘
var minCostConnectPoints = function (points) {
  const n = points.length;
  const visited = new Set(); // MST에 포함된 점들
  let totalCost = 0;

  // Manhattan distance 계산
  const getDist = (i, j) => {
    return (
      Math.abs(points[i][0] - points[j][0]) +
      Math.abs(points[i][1] - points[j][1])
    );
  };

  // 아직 연결되지 않은 점들까지의 최소 거리를 저장
  const minDist = Array(n).fill(Infinity);
  minDist[0] = 0; // 시작점

  for (let i = 0; i < n; i++) {
    let currMinDist = Infinity;
    let curr = -1;

    // 방문하지 않은 점들 중에서 최소 거리를 가진 점 찾기
    for (let j = 0; j < n; j++) {
      if (!visited.has(j) && minDist[j] < currMinDist) {
        currMinDist = minDist[j];
        curr = j;
      }
    }

    // 현재 점을 MST에 추가
    visited.add(curr);
    totalCost += currMinDist;

    // 새로 추가된 점에서 방문하지 않은 다른 점들까지의 거리 업데이트
    for (let j = 0; j < n; j++) {
      if (!visited.has(j)) {
        const dist = getDist(curr, j);
        minDist[j] = Math.min(minDist[j], dist);
      }
    }
  }

  return totalCost;
};

console.log(minCostConnectPoints(points));
