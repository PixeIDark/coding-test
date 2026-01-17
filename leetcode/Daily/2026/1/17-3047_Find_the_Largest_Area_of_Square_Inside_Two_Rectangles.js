// 겹치는 영역에서 가장 큰 정사각형 너비 반환
// 바텀 [0], [1] 은 큰쪽을 가져옴
// 탑 [0], [1] 은 작은쪽
// 각 좌표 작은쪽 - 큰쪽, x, y 중 최소 값
// 40분
var largestSquareArea = function (bottomLeft, topRight) {
  const n = bottomLeft.length;
  let maxLength = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const bottomX = Math.max(bottomLeft[i][0], bottomLeft[j][0]);
      const bottomY = Math.max(bottomLeft[i][1], bottomLeft[j][1]);
      const topX = Math.min(topRight[i][0], topRight[j][0]);
      const topY = Math.min(topRight[i][1], topRight[j][1]);
      const length = Math.min(topX - bottomX, topY - bottomY);
      maxLength = Math.max(length, maxLength);
    }
  }

  return maxLength * maxLength;
};