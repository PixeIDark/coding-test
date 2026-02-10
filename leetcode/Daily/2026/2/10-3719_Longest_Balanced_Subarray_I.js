// 12분
var longestBalanced = function (nums) {
  const n = nums.length;
  let result = 0;

  for (let i = 0; i < n - 1; i++) {
    let set = new Set();
    let count = 0;

    for (let j = i; j < n; j++) {
      const num = nums[j];

      if (!set.has(num)) {
        set.add(num);
        const value = num % 2 === 1 ? 1 : -1;
        count += value;
      }

      if (count === 0) result = Math.max(result, j - i + 1);
    }
  }

  return result;
};