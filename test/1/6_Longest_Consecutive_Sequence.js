// 연속으로 된거 길이

const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]; // 7

// 걍 sort로 정렬하고 옆에 놈이랑 비교해보면됨.
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let set = new Set(nums),
    a = [],
    k = 1;
  nums = [...set].sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] === 1) {
      k++;
      continue;
    }
    a.push(k);
    k = 1;
  }

  const result = Math.max(...a);

  return result;
};

console.log(longestConsecutive(nums));

// Set, continue 써봄.
