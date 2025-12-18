// -1은 되도록 낮은요소에 부여
// 1은 되도록 높은요소에 부여
// 0은 나머지를 넣음
// k는 변경가능 한 연속된 요소 개수, 앞의 k/2는 0 뒤의 k/2는 1
// 1. 현재 전략으로 얻는 이득 계산 => prev
// 2. 연속된 요소를 설정 후 슬라이딩
// 3. 슬라이딩: 처음요소를 원래로, 중간 요소를 -, 마지막 요소를 +
// 42분
var maxProfit = function (prices, strategy, k) {
  const newStrategy = [...Array(k / 2).fill(0), ...Array(k / 2).fill(1), ...strategy.slice(k)];
  const prev = prices.reduce((a, b, i) => a + (b * strategy[i]), 0);
  let curr = prices.reduce((a, b, i) => a + (b * newStrategy[i]), 0);
  let max = curr;

  for (let i = k; i < prices.length; i++) {
    const leftValue = prices[i - k] * strategy[i - k];
    const midValue = -prices[i - k / 2];
    const rightValue = prices[i] * (1 - strategy[i]);

    curr += leftValue + midValue + rightValue;
    max = Math.max(max, curr);
  }

  return Math.max(prev, max);
};