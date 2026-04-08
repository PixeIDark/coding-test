// queries[0]: start, [1]: end, [2]: += k, [3]: =* v
// 완성된 배열의 모든요소 XOR 결과 반환
// 쿼리 하나씩 적용해보자
// 9분
var xorAfterQueries = function (nums, queries) {
  const mod = 1e9 + 7;

  for (let [start, end, k, value] of queries) {
    while (start <= end) {
      nums[start] = (nums[start] * value) % mod;
      start += k;
    }
  }

  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};