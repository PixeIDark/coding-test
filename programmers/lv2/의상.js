// 가짓수 반환 최소 한개는 존재해야함, 종류별 최대 1개 착용 가능
// 1. 배열 만들기 index: 종류, el: 개수
// 2. *= num + 1
// 46분
function solution(clothes) {
  const map = new Map();

  for (const [_, type] of clothes) {
    map.set(type, (map.get(type) ?? 0) + 1);
  }

  return [...map.values()].reduce((a, b) => a * (b + 1), 1) - 1;
}
