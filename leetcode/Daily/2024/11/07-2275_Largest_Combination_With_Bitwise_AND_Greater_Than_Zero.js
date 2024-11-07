// 0보다 큰 and연산자 조합중 가장 길이가 긴 거 길이 출력

const candidates = [8, 8];
// Output: 4
// Explanation: The combination [16,17,62,24] has a bitwise AND of 16 & 17 & 62 & 24 = 16 > 0.
// The size of the combination is 4.
// It can be shown that no combination with a size greater than 4 has a bitwise AND greater than 0.
// Note that more than one combination may have the largest size.
// For example, the combination [62,12,24,14] has a bitwise AND of 62 & 12 & 24 & 14 = 8 > 0.

// 자릿수마다 배열 만들어서 저장 후 최대 값
var largestCombination = function (candidates) {
  const arr = new Array(32).fill(0);

  for (const candidate of candidates) {
    const bit = ~~Math.log2(candidate) + 1;
    for (let i = 0; i < bit; i++) {
      if (candidate & (1 << i)) {
        arr[i]++;
      }
    }
  }

  return Math.max(...arr);
};

console.log(largestCombination(candidates));
