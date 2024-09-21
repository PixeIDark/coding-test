// 바나나 더미가 4개 있습니다: 3개, 6개, 7개, 11개
// 경비원들은 8시간 후에 돌아옵니다
// 결과로 나온 4는 코코가 시간당 4개의 바나나를 먹으면 8시간 내에 모든 바나나를 먹을 수 있다는 의미입니다

const piles = [3, 6, 7, 11];
const h = 8;
// Output: 4

// piles[i] 마다 k로 나눠서 올림한값 전체합 k = h여야함.
// 1. h = piles[i]/k + piles[i]/k + piles[i]/k...
// 2. k값 뭔지 찍어야함 ㅋㅋ k의 최소값은 piles 전체합/ h
// 3. 일단 최소값없이 깡으로 ㄱㄱ
var minEatingSpeed = function (piles, h) {
  let l = 0;
  let r = piles.length - 1;

  while (l < r) {
    let m = Math.floor((l + r) / 2);
    let a = 0;
    for (let i = 0; i < piles.length; i++) {
      a += piles[i] / m;
    }

    if (h === a) return m;
  }
};

console.log(minEatingSpeed(piles, h));
