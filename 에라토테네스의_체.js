// 소수를 구함에 있어 가장 효율적이라는 에라토스테네스의 체를 구현해보자.

// 소수특:
// 자신이랑 1로만 나누어 떨어짐
// 0, 1 은 소수가 될 수 없다.
// 자신의 2~자신의 제곱은으로 자신을 나눴을 때 나누어 떨어지면 소수가 아님.
const 에라토스테네스의체 = (num) => {
  // 길이 num인 체 구현. 인덱스가 값임
  const sieve = Array(num).fill(true);

  // 0과 1은 소수가 아니므로 false
  sieve[0] = sieve[1] = false;

  // 2부터 제곱근까지 나눠서 떨어지는지
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (sieve[i]) {
      for (let j = i * i; j < n; j += i) {
        // 이부분이 이해가안됨.
        sieve[j] = false;
      }
    }
  }

  // 가장 큰 값 구할려면 맨 뒤부터 true 체크
  for (let i = n; i > 1; i--) {
    if (sieve[i]) return i;
  }
};

// 에라토스테네스의 체 거품임. 소수 하나만 필요할 경우 그냥 함수가 더 빠름.
// for (let i = 2; i <= Math.sqrt(num); i++) {
//   if (num % i === 0) return false;
// }
// return true
