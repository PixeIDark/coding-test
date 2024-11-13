// lower <= nums[i] + nums[j] <= upper 인 거 개수 출력

const nums = [0, 1, 7, 4, 4, 5],
  lower = 3,
  upper = 6;
// Output: 6
// Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).

// time limit
var countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b);

  const binaryLower = (start, target) => {
    let left = start;
    let right = nums.length - 1;
    let result = nums.length;

    while (right >= left) {
      const mid = Math.floor((right + left) / 2);

      if (target <= nums[mid]) {
        result = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return result;
  };

  const binaryUpper = (start, target) => {
    let left = start;
    let right = nums.length - 1;
    let result = start - 1;

    while (right >= left) {
      const mid = Math.floor((right + left) / 2);

      if (target >= nums[mid]) {
        result = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  };

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const min = binaryLower(i + 1, lower - nums[i]);
    const max = binaryUpper(i + 1, upper - nums[i]);

    if (min <= max) {
      count += max - min + 1;
    }
  }
  return count;
};

console.log(countFairPairs(nums, lower, upper));
