// 어제랑 다를게 거의 없음 걍
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