// text1, text2 가장 많이겹치는 char 길이 반환

const text1 = "ezupkr",
  text2 = "ubmrapg";
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.

// 겹치는게 있으면 인덱스 ++
// 비교했던 인덱스는 안뒤져도 됨.
// stack으로 text1담아서 ㄱ
var longestCommonSubsequence = function (text1, text2) {
  const dp = Array.from({ length: text1.length + 1 }, () =>
    new Array(text2.length + 1).fill(0)
  );

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp;
};

console.table(longestCommonSubsequence(text1, text2));
