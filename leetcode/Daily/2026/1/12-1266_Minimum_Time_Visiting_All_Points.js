// x y 모두 1 증감 하거나 x 나 y 둘 중하나 1증감 하는식으로 이동 가능
// x y 모두 증감 우선하고 남은 것을 둘중 하나 증감으로 처리
// 9분
var minTimeToVisitAllPoints = function (points) {
  let curr = points[0];
  let time = 0;

  for (let i = 1; i < points.length; i++) {
    const next = points[i];
    const diffX = Math.abs(curr[0] - next[0]);
    const diffY = Math.abs(curr[1] - next[1]);

    time += Math.max(diffX, diffY);
    curr = next;
  }

  return time;
};