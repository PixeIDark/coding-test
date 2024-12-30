// low~high 의 length 를 가진 문자열 만드는 가짓수

const low = 2,
  high = 3,
  zero = 1,
  one = 2;
// Output: 5
// Explanation: The good strings are "00", "11", "000", "110", and "011".

// dp로 각 인덱스 길이까지 나올수 있는 경우의 수를 저장
var countGoodStrings = function (low, high, zero, one) {
  const MOD = 1e9 + 7;
  const dp = Array(high + 1).fill(0);
  let result = 0;
  dp[0] = 1;

  for (let i = 1; i <= high; i++) {
    if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % MOD;
    if (i >= one) dp[i] = (dp[i] + dp[i - one]) % MOD;
    if (i >= low) result = (result + dp[i]) % MOD;
  }

  return result;
};

console.log(countGoodStrings(low, high, zero, one));
