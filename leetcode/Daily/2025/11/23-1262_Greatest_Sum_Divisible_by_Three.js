// 3으로 나누어 떨어지는 가장 큰 합 반환
// 일단 3으로 나누어 떨어지는 요소는 무조건 합함
// 그외 떨거지들을 두곳에 모으고 정렬해서 배열을 만듬
// 41분
var maxSumDivThree = function (nums) {
  const dp = [0, -Infinity, -Infinity];

  for (const num of nums) {
    const temp = [...dp];
    for (let i = 0; i < 3; i++) {
      const remainder = (i + num) % 3;
      dp[remainder] = Math.max(dp[remainder], temp[i] + num);
    }
  }

  return dp[0];
};