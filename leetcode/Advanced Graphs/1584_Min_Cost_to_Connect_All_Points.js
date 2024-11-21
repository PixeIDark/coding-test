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
var minCostConnectPoints = function (points) {
  let result = 0;
  // index로 저장 이어진 부분.
  let arr = Array(points.length).fill(-1);

  for (let i = 0; i < points.length - 1; i++) {
    const [x, y] = points[i];
    let min = Infinity;
    let minIndex = -1;
    for (let j = 0; j < points.length; j++) {
      if (arr[i] === j || j === i) continue;

      const [dx, dy] = points[j];
      const distance = Math.abs(x - dx) + Math.abs(y - dy);

      if (min >= distance) {
        min = distance;
        minIndex = j;
      }
    }
    arr[minIndex] = i;
    result += min;
  }

  return result;
};

console.log(minCostConnectPoints(points));
