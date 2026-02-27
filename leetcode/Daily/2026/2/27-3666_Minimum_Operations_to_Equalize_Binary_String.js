// k개의 인덱스를 뒤집는 작업으로 모든 문자열 "1"로 만들기 위한 최소 작업 횟수
// k가 홀수면 무조건 가능함, k가 1이면 최소 "0"개수 출력
// "10101010101" one = 6, zero = 5, k = 3, zero가 k로 나누어 떨어져야함
// one = 9, zero = 2
// one = 8, zero = 3
// one = 11, zero = 0
// diff = Math.abs(x - y) k가 짝수면 짝수 차이 줄수있고, 홀수면 홀수 차이 줄수있음
// k = 7, => 1, 3, 5, 7
// k = 8, => 0, 2, 4, 6, 8
// 1. "0"개수 zero 계산
// 2. zero를 k 로 나눠서 나머지 remain 계산
// 3. remain을 k로 나누어떨어질때까지 늘려가면서 작업횟수 t++
// k가 짝수고, remain 이 홀수인 경우 불가능 -1
// k가 짝수고, remain 이 짝수인 경우 몫 + 2 반환
// k가 홀수고, remain 이 홀수인 경우 몫 + 2 반환
// k가 홀수고, remain 이 짝수인 경우 몫 + 3 반환
// TODO: 벽
var minOperations = function (s, k) {
  const zero = s.split("").filter(x => x === "0").length;
  const result = Math.floor(zero / k);
  const remain = k - (zero % k);
  // result = 0 remain = 1 k = 3
  console.log(result, remain, k);
  if (zero === 0) return 0;

  if (zero === k) return 1;

  if (k === 1) return zero;

  if (s.length === k) return -1;

  if (remain === k) return result;

  if (k % 2 === 1) {
    if (remain % 2 === 1) return result + 2;
    else return result + 3;
  } else {
    if (remain % 2 === 1) return -1;
    else return result + 2;
  }
};