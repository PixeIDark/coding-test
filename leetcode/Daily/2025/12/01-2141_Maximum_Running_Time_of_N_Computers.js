// 배터리 총합 / 2 내림차해보자
// 각 컴퓨터에 배터리 용량 많은 순대로 연결 [10, 10, 3, 5] n = 3
// 가장 용량 작은 컴퓨터에 남은 배터리를 1씩 넣어봄
// 26분
var maxRunTime = function (n, batteries) {
  batteries.sort((a, b) => a - b);
  const arr = batteries.slice(batteries.length - n);
  let spare = batteries.slice(0, batteries.length - n).reduce((a, b) => a + b, 0);

  for (let i = 0; i < n - 1; i++) {
    const diff = arr[i + 1] - arr[i];
    const stack = i + 1;
    const needed = diff * stack;

    if (needed > spare) return arr[i] + Math.floor(spare / stack);

    spare -= needed;
  }


  return arr[n - 1] + Math.floor(spare / n);
};