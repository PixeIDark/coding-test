// 민우의 로또 최소순위, 최대 순위 출력하기 오름차

const lottos = [0, 0, 0, 0, 0, 0],
  win_nums = [31, 10, 45, 1, 6, 19];
// Output: [3, 5]

// 로또의 0을 제외한 나머지 숫자가 몇 개 겹치는지 비교.
// map
function solution(lottos, win_nums) {
  const dp = Array(46).fill(0);
  let result = 7;

  for (const lotto of lottos) {
    dp[lotto]++;
  }

  for (const num of win_nums) {
    if (dp[num]) result--;
  }

  if (result === 7) return [result - dp[0] === 7 ? 6 : result - dp[0], 6];

  return [result - dp[0], result];
}

console.log(solution(lottos, win_nums));
