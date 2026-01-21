// brown = row * 2 + (col - 2) * 2
// yellow = (row - 2) * (col - 2)
// 2x + 2y - 4 = 24, x = 14 - y, y = 14 - x
// (x - 2) * (y - 2) = 24, (12 - y) * (y - 2) = 24, 14y - y^2 = 48
// 걍 무차별 대입해보자
// 23분
function solution(brown, yellow) {
  for (let row = 3; row < 1e9; row++) {
    if (yellow % (row - 2) !== 0) continue;

    const col = yellow / (row - 2) + 2;
    // 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
    if (brown === row * 2 + (col - 2) * 2) return [Math.max(row, col), Math.min(row, col)];
  }
}