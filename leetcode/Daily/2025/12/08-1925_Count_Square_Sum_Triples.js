// c^2 = a^2 + b^2,
// 1 <= a, b, c <= n
// 몇개가 성립하는지 반환
// set에 n 까지의 제곱을 모두 넣고, 끝에서부터 시작해서 c가 set에 존재하는지 탐색
// 9분
var countTriples = function (n) {
  const set = new Set;

  for (let i = 1; i <= n; i++) {
    set.add(i * i);
  }

  const arr = [...set];
  let result = 0;

  for (let i = 0; i <= n - 1; i++) {
    const a = arr[i];

    for (let j = i + 1; j <= n - 1; j++) {
      const b = arr[j];
      if (set.has(a + b)) result += 2;
    }
  }

  return result;
};