// (a, b, c) 에서  a === c, a === b * 2 개수 반환
// new Map[] 프리픽스로 빈도를 추적해보자
// 26분
var specialTriplets = function (nums) {
  const mod = 1e9 + 7;
  const right = new Map();

  for (const num of nums) {
    right.set(num, (right.get(num) ?? 0) + 1);
  }

  const left = new Map();
  let result = 0;

  for (const num of nums) {
    right.set(num, right.get(num) - 1);

    const target = num * 2;
    const leftCount = left.get(target) ?? 0;
    const rightCount = right.get(target) ?? 0;

    result = (result + leftCount * rightCount) % mod;
    left.set(num, (left.get(num) ?? 0) + 1);
  }

  return result;
};