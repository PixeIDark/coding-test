// 1 ~ n 범위에 있는 숫자들 banned 제외 합해서 maxSum 할려면 숫자 몇개 더해야하는지. 숫자 최대한 많이 더한 거 출력.

const banned = [
    176, 36, 104, 125, 188, 152, 101, 47, 51, 65, 39, 174, 29, 55, 13, 138, 79,
    81, 175, 178, 42, 108, 24, 80, 183, 190, 123, 20, 139, 22, 140, 62, 58, 137,
    68, 148, 172, 76, 173, 189, 151, 186, 153, 57, 142, 105, 133, 114, 165, 118,
    56, 59, 124, 82, 49, 94, 8, 146, 109, 14, 85, 44, 60, 181, 95, 23, 150, 97,
    28, 182, 157, 46, 160, 155, 12, 67, 135, 117, 2, 25, 74, 91, 71, 98, 127,
    120, 130, 107, 168, 18, 69, 110, 61, 147, 145, 38,
  ],
  n = 3016,
  maxSum = 240;
// Output: 2
// Explanation: You can choose the integers 2 and 4.
// 2 and 4 are from the range [1, 5], both did not appear in banned, and their sum is 6, which did not exceed maxSum.

// 작은 숫자부터 차근차근 더해버리기.
// dp로 계산 인덱스는 currSum, 요소는 더해야 할 것들 arr
var maxCount = function (banned, n, maxSum) {
  if (maxSum < 1) return 0;
  if (n >= maxSum) n = maxSum;

  const bans = new Set(banned);

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (bans.has(i)) continue;
    let max = maxSum - i;

    if (max < 0) {
      return count;
    }
    count++;
    bans.add(i);
    maxSum = max;
    if (max === 0) break;
  }

  return count;
};

console.log(maxCount(banned, n, maxSum));
