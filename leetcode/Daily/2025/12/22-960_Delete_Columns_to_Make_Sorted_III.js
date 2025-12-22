// 각 요소내부에서 char끼리 정렬됬는지 판단. 인덱스를 제거해서 정렬시킬 수 있고, 다른 요소의 인덱스도 삭제가됨
// 최소 삭제 개수 반환
// 열에서 가장 긴 유효한 시퀸스 추적
// 37분
var minDeletionSize = function (strs) {
  const n = strs.length;
  const m = strs[0].length;
  const dp = Array(m).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < i; j++) {
      let isPass = true;

      for (let k = 0; k < n; k++) {
        if (strs[k][j] > strs[k][i]) {
          isPass = false;
          break;
        }
      }

      if (isPass) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  return m - Math.max(...dp);
};