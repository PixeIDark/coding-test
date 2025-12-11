// 4방향이 모두 건물에 둘러쌓인 건물 개수 반환
// [x, y] [sx, y] [lx, y] [x, sy] [x, ly] 각 타입 키값 확인
// y => x, x => y Map객체 생성
// building 의 을 맵객체에 넣고 키를 받아와서 키의 처음과 끝 사이에 값이 있는지 확인
// 34분
var countCoveredBuildings = function (n, buildings) {
  const minX = new Map();
  const maxX = new Map();
  const minY = new Map();
  const maxY = new Map();

  for (const [x, y] of buildings) {
    minX.set(x, Math.min(minX.get(x) ?? Infinity, y));
    maxX.set(x, Math.max(maxX.get(x) ?? -Infinity, y));
    minY.set(y, Math.min(minY.get(y) ?? Infinity, x));
    maxY.set(y, Math.max(maxY.get(y) ?? -Infinity, x));
  }

  let result = 0;

  for (const [x, y] of buildings) {
    if (minX.get(x) < y && maxX.get(x) > y && minY.get(y) < x && maxY.get(y) > x) result++;
  }

  return result;
};