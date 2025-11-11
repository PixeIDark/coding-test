// m === "0"개수, n === "1"개수
// m가 n 이하인 부분집합 최대 크기 반환
// [0]: 0개수 [1]: 1개수
// 26분
var findMaxForm = function (strs, m, n) {
  const arr = strs.map((str) => {
    const zero = str.split("").filter(char => char === "0").length;
    const one = str.length - zero;

    return [zero, one];
  });

  // 각 선택지들을 저장하고 가장 높은 선택지를 가져가야함
  // 0의개수가 i 이하일때, 1의개수가 n 이하일때 최대 개수를 저장하면서 진행
  const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));

  for (const [zero, one] of arr) {
    for (let i = m; i >= zero; i--) {
      for (let j = n; j >= one; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zero][j - one] + 1);
      }
    }
  }

  return dp[m][n];
};