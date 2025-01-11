// s를 k개 로 나눠 모든 char 써서 팰린드롬 만들어 지는지

const s = "annabelle",
  k = 2;
// Output: true
// Explanation: You can construct two palindromes using all characters in s.
//     Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"

// 펠린드롬 조건이 짝수개의 char >= 1 이고, 홀수개의 char = 1이면 성립됨. 단, s = 1 이면, 홀수개의 char 1 개 s = 2 면, 짝수개의 char 1개
// length 짝수면 짝수개의 char만 필요
// length 홀수면 홀수개의 char도 추가
var canConstruct = function (s, k) {
  if (k > s.length) return false;
  if (k === s.length) return true;

  const dp = Array(26).fill(0);
  for (const char of s) {
    const charNumber = char.charCodeAt(0) - 97;
    dp[charNumber]++;
  }

  let alone = 0;
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] % 2 === 1) alone++;

    if (alone > k) return false;
  }

  return true;
};

console.log(canConstruct(s, k));
