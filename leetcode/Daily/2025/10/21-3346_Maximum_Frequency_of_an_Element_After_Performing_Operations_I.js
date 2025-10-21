// 배열의 요소 최대 빈도수 가능한 크게 만들어라
// -k ~ k 범위를 요소에 더할수 있고, numOperations--
// 오름차순으로 정렬
// prev > curr - k 일 시, map.set(map.get(prev) + 1)
// prev < curr - k 일 시, prev = curr
// 46분
var maxFrequency = function (nums, k, numOperations) {
  const cnt = new Map()

  for (const x of nums) {
    cnt.set(x, (cnt.get(x) ?? 0) + 1)
  }

  const diff = new Map()
  for (const x of nums) {
    diff.set(x, (diff.get(x) ?? 0) + 0)
    diff.set(x - k, (diff.get(x - k) ?? 0) + 1)
    diff.set(x + k + 1, (diff.get(x + k + 1) ?? 0) - 1)
  }

  const sortedKeys = Array.from(diff.keys()).sort((a, b) => a - b);
  let max = 0;
  let sum = 0;

  for (const x of sortedKeys) {
    sum += diff.get(x);
    const freq = (cnt.get(x) ?? 0) + Math.min(sum - (cnt.get(x) ?? 0), numOperations);
    max = Math.max(max, freq);
  }

  return max;
};