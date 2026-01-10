// 두 문자열을 같게 만들기 위해 삭제하는 문자의 숫자 값 합 최소값 반환
// 길이가 다를경우 큰쪽을 삭제해서 작은 것로 맞춰야함
// 21분
var minimumDeleteSum = function (s1, s2) {
  const n = s1.length;
  const m = s2.length;
  const dp = Array.from({length: n + 1}, () => Array(m + 1).fill(0));

  for (let i = 1; i < n + 1; i++) {
    dp[i][0] = dp[i - 1][0] + s1[i - 1].charCodeAt(0);
  }

  for (let j = 1; j < m + 1; j++) {
    dp[0][j] = dp[0][j - 1] + s2[j - 1].charCodeAt(0);
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else {
        dp[i][j] = Math.min(dp[i - 1][j] + s1[i - 1].charCodeAt(0),
          dp[i][j - 1] + s2[j - 1].charCodeAt(0),
        );
      }
    }
  }

  return dp[n][m];
};