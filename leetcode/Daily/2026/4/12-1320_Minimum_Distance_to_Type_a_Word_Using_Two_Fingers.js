// 독수리 타법 최대 효율
// 첫번쨰 손가락은 첫 문자 고정이고, 두번째 손가락 진입 타이밍이 관건
// 각 문자마다 어느 손가락으로 첫을 때 최소값인지 분기별로
// CAKE
// [C]
// TODO: 벽
var minimumDistance = function (word) {
  const n = word.length;

  const getDistance = (a, b) => {
    const x1 = Math.floor(a / 6);
    const y1 = a % 6;
    const x2 = Math.floor(b / 6);
    const y2 = a % 6;

    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  };

  let first = 0;

  for (let i = 1; i < n; i++) {
    const prev1 = word[i - 1].charCodeAt() - 65;
    const curr1 = word[i].charCodeAt() - 65;

    console.log(prev1, curr1);

  }
};