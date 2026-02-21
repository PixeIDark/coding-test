// left ~ right 비트 중 비트 수가 소수인거 개수
// 10^6 < 32비트
// 2,3,5,7,11,13,17,19,23,29,31 <= "1" 의 개수가 다음과 같으면 count++
// 9분
var countPrimeSetBits = function (left, right) {
  const prime = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
  let result = 0;

  while (left <= right) {
    const arr = left.toString(2).split("");
    const value = arr.filter(x => x === "1").length;

    if (prime.has(value)) result++;
    left++;
  }

  return result;
};