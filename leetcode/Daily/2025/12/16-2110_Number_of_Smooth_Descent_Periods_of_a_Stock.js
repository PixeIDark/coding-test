// 일단 모든 단일 요소는 부드러운 하강으로 판정
// 현재 요소가 이전 요소보다 정확히 1이 작다면 부드러운 하강 시퀸스임
// 모든 시퀸스를 반환
// 기본 증가값은 0 시퀸스에 요소가 추가될때마다 기본 증가값++
// 12분
var getDescentPeriods = function (prices) {
  const n = prices.length;
  let count = 0;
  let result = n;

  for (let i = 1; i < n; i++) {
    if (prices[i] === prices[i - 1] - 1) {
      count++;
      result += count;
    } else count = 0;
  }

  return result;
};