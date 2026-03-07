// 1. [0] 인덱스를 끝 인덱스로 옮기기
// 2. 문자열 뒤집기
// 2번 유형의 최소 연산 횟수 반환
// 되도록 1번으로 처리하고 2번 후순위
// 1번은 횟수에 포함안되니 무한이라 가정
// s + s에서 2번 연산을 최소로 적용
// 22분
var minFlips = function (s) {
  const n = s.length;
  const str = s + s;
  let one = 0;
  let result = n;

  for (let i = 0; i < 2 * n; i++) {
    if (str[i] === (i % 2 === 0 ? "0" : "1")) one++;

    if (i >= n) {
      if (str[i - n] !== ((i - n) % 2 === 0 ? "1" : "0")) one--;
    }

    if (i >= n - 1) {
      console.log(i, one);
      result = Math.min(result, one, n - one);
    }
  }

  return result;
};