// 크기는 1  ~ n + 2, 1 ~ m + 2 (n + 1, m + 1)
// 막대를 가로 세로 하나씩 제거해서 최대한의 정사각형 너비 반환
// [[1, 1, 1]
//  [1, 1, 1]
//  [1, 1, 1]
//  [1, 1, 1]]
// 기본 h = 1, l = 1
// 연속되게 한 방향의 가로 막대가 제거되면 h++
// 세로가 제거되면 l++
// 세로랑 가로의 연속된 구간 서로 min 값 + 1 을 곱하면 답
// 26분
var maximizeSquareHoleArea = function (n, m, hBars, vBars) {
  hBars.sort((a, b) => a - b);
  vBars.sort((a, b) => a - b);
  let count = 1;
  let maxH = 1;

  for (let i = 1; i < hBars.length; i++) {
    if (hBars[i] === hBars[i - 1] + 1) count++;
    else count = 1;
    maxH = Math.max(maxH, count);
  }

  count = 1;
  let maxV = 1;

  for (let i = 1; i < vBars.length; i++) {
    if (vBars[i] === vBars[i - 1] + 1) count++;
    else count = 1;
    maxV = Math.max(maxV, count);
  }

  const l = Math.min(maxH, maxV) + 1;

  return l * l;
};