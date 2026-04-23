// 일단 브루트포스
// num => [...index]
// b - a + c - a = b + c - 2a
// b - a + c - b = c - a
// c - a + c - b = 2c - a - b
// [0, 2, 3]
// [5, 2, ]
// 누적합안하면 통과안됨, 공식을 못찾겟음
// 39분
var distance = function (nums) {
  const map = new Map();
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (!map.has(num)) map.set(num, []);
    map.get(num).push(i);
  }

  const result = Array(n).fill(0);

  for (const [key, values] of map) {
    const m = values.length;
    let leftSum = 0;

    for (let i = 0; i < m; i++) {
      leftSum += values[i];
      result[values[i]] += values[i] * (i + 1) - leftSum;
    }

    let rightSum = 0;

    for (let i = m - 1; i >= 0; i--) {
      rightSum += values[i];
      result[values[i]] += rightSum - values[i] * (m - i);
    }
  }

  return result;
};