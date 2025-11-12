// [i], [i + 1] 의 최대공약수로 [i]를 바꿀수 있음
// 모든 요소1이 되는 최소횟수 반환, 아니면 -1
// 횟수 적게 드는것부터 1로 만들어야함 소수의 경우 무조건 1임
// 48분
var minOperations = function (nums) {
  // 패턴1. nums에 1이 하나라도 잇으면 배열길이 - 1개수 반환
  // 패턴2. nums에 1없어서 최소 연산으로 만들고 진행
  // 패턴3. 모든 요소가 짝수면 불가능

  if (nums.every(num => num % 2 === 0)) return -1;

  const n = nums.length;
  const one = nums.filter(num => num === 1).length;

  if (one > 0) return n - one;

  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  // [2,6,3,4]. 작은포문 [2] => [2,6] 큰포문 [2,6,3,4] => [6] 모든 부분배열 순회
  let min = Infinity;

  for (let i = 0; i < n; i++) {
    let curr = 0;

    for (let j = i; j < n; j++) {
      curr = gcd(curr, nums[j]);
      if (curr === 1) min = Math.min(min, j - i + 1);

    }
  }

  if (min === Infinity) return -1;

  return n + min - 2;
};