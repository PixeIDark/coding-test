// (num) => [...index].sort()
// 21분
var minMirrorPairDistance = function (nums) {
  const n = nums.length;
  const map = new Map();
  let result = Infinity;

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const reversedNum = Number(String(num).split("").reverse().join(""));

    if (map.has(num)) {
      const last = map.get(num);
      result = Math.min(result, i - last);
    }

    map.set(reversedNum, i);
  }

  if (result === Infinity) return -1;

  return result;
};