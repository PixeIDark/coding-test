// bottom을 이용해서 1층을 만들고, allowed 규칙에 따라 끝까지 쌓을수 있는지 불리언 리턴
// allowed를 아래 객체(또는 map)로 변환:
// obj = {
//  BC : "C",
//  CD : "E",
//  CE : "A",
//  FF : "F",
// }
// 1. bottom 을기반으로 obj를 참조. 불가능 시 return false
// 2. 참조 성공 시 배열이나 문자열로 정리하고 다시 순회
// 38분
var pyramidTransition = function (bottom, allowed) {
  const blockList = new Map();

  for (let i = 0; i < allowed.length; i++) {
    const block = allowed[i];
    const key = block[0] + block[1];
    const value = block[2];
    // 키가 겹쳐서 밸류가 여러개인 경우도 있음
    // bfs로 해야할듯
    if (!blockList.has(key)) blockList.set(key, []);
    blockList.get(key).push(value);
  }

  const getNextFloors = (curr, index, path) => {
    if (path.length === curr.length - 1) return [path];

    const key = curr[index] + curr[index + 1];
    const blocks = blockList.get(key);

    if (!blocks) return [];

    const result = [];

    for (const block of blocks) {
      result.push(...getNextFloors(curr, index + 1, path + block));
    }

    return result;
  };

  const memo = new Set();
  // 만약 틀리면 다시 돌아가서 다른 거 선택하게 해야함
  // 가장 최근의 분기로 돌아가야함
  const bk = (curr) => {
    // bk 함수의 결과가 false면 버리고 true일 시 따라가게하면됨
    // 다음층의 모든 가능성을 알아내야함 => 헬퍼함수로 현재층을 기반으로 모든 다음층 배열로 반환함수
    if (curr.length === 1) return true;
    if (memo.has(curr)) return false;

    const nextFloors = getNextFloors(curr, 0, "");

    for (const next of nextFloors) {
      if (bk(next)) return true;
    }

    memo.add(curr);

    return false;
  };

  return bk(bottom);
};