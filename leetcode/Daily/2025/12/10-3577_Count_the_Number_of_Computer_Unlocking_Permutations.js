// 모든 컴퓨터 잠금을 해제하는 순열 개수 반환
// 요소와 인덱스 값이 더 높으면 해제 가능
// 50분
var countPermutations = function (complexity) {
  const mod = 1e9 + 7;
  const root = complexity[0];

  if (complexity.filter((x) => x <= root).length >= 2) return 0;

  const n = complexity.length;
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = (result * (i - 1)) % mod;
  }

  return result;
};