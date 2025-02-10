// 나쁜 페어 개수

const nums = [4, 1, 3, 3];
// Output: 5
// Explanation: The pair (0, 1) is a bad pair since 1 - 0 != 1 - 4.
// The pair (0, 2) is a bad pair since 2 - 0 != 3 - 4, 2 != -1.
// The pair (0, 3) is a bad pair since 3 - 0 != 3 - 4, 3 != -1.
// The pair (1, 2) is a bad pair since 2 - 1 != 3 - 1, 1 != 2.
// The pair (2, 3) is a bad pair since 3 - 2 != 3 - 3, 1 != 0.
// There are a total of 5 bad pairs, so we return 5.

// nums[j] - j != nums[i] - i 면 나쁜놈
// 모든 경우의 수 - 착한 페어 = 나쁜 페어
// 1. nums 요소에 인덱스를 빼주자
// 2. 요소를 키, 개수를 밸류로 하는 map 객체 만들자.
// 전체 개수 = length 2 = 1, length 3 = 1 + 2, length 4 = 1 + 2 + 3, length 5 = 1 + 2 + 3 +4, length 6 = 1 + 2 + 3 + 4 + 5,
// ((n - 1) * n ) / 2 = 전체 개수
// 좋은놈 개수도 똑같아 value 로 함 1이면 무시
var countBadPairs = function (nums) {
  if (nums.length === 1) return 0;

  const n = nums.length;
  const counts = new Map();
  let totalPairs = ((n - 1) * n) / 2;

  for (let i = 0; i < n; i++) {
    const num = nums[i] - i;
    counts.set(num, (counts.get(num) || 0) + 1);

    const count = counts.get(num);
    totalPairs -= count - 1;
  }

  return totalPairs;
};

console.log(countBadPairs(nums));
