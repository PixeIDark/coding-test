// 수평선 y 기준으로 영역을 나눴을 시 각 영역의 사각형의 너비 총합은 같아야한다
// y의 최소값 반환. 사각형은 서로 겹칠 수 있고, 여러 번 계산해야함
// y < k < y + l 윗면적은 (l - (k - y)) * l 아랫면적은 (k - y) * l
// k <= y 계산 안해도됨
// 1. 사각형 총합 구하기
// 2. 이진 탐색으로 소수점 5개까지 검색
// 54분
var separateSquares = function (squares) {
  const total = squares.reduce((acc, [x, y, l]) => acc + l * l, 0);

  // y < k < y + l 의 조건을 가진 사각형들을 찾아내야함
  // y + l < k 인 사각형은 모두 아래팀, y > k 인 사각형은 모두 윗팀
  // 사각형들을 y 내림차 기준으로 정렬
  const bs = (k) => {
    let topTotal = 0;

    for (const [x, y, l] of squares) {
      if (y >= k) topTotal += l * l;
      if (y < k && k < y + l) topTotal += (l - (k - y)) * l;
    }

    return topTotal;
  };

  // 실수 이진탐색은 정수와 다름 (1 / 1e5)
  let left = 0;
  let right = Math.max(...squares.map(([_, y, l]) => y + l));

  for (let i = 0; i < 50; i++) {
    const mid = (left + right) / 2;
    const topTotal = bs(mid);
    const bottomTotal = total - topTotal;

    if (bottomTotal < topTotal) left = mid;
    else right = mid;
  }

  return left;
};