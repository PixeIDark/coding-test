// 8분
var minimumDistance = function (nums) {
  const n = nums.length;
  const map = new Map();
  let result = Infinity;

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (!map.has(num)) map.set(num, []);

    const key = map.get(num);
    key.push(i);
    if (key.length < 3) continue;

    const k = key.at(-3);
    result = Math.min(result, Math.abs(i - k) * 2);
  }

  if (result === Infinity) return -1;

  return result;
};