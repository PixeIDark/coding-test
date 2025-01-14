// 중복 3 이상 이면 무시

const s = "qz";
// Output: 5
// Explanation:
//     We do the following operations:
//     Choose index 2, then remove the characters at indices 0 and 3. The resulting string is s = "bacbcbb".
//     Choose index 3, then remove the characters at indices 0 and 5. The resulting string is s = "acbcb".

var minimumLength = function (s) {
  const dp = Array(26).fill(0);

  for (const char of s) {
    const charNumber = char.charCodeAt(0) - 97;
    dp[charNumber]++;

    if (dp[charNumber] >= 3) dp[charNumber] -= 2;
  }

  return dp.reduce((a, b) => a + b, 0);
};

console.log(minimumLength(s));
