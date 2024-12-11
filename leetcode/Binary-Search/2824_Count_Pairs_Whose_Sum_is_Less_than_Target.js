//

const nums = [-6, 2, 5, -2, -7, -1, 3],
  target = -2;
// Output: 3
// Explanation: There are 3 pairs of indices that satisfy the conditions in the statement:
//     - (0, 1) since 0 < 1 and nums[0] + nums[1] = 0 < target
//     - (0, 2) since 0 < 2 and nums[0] + nums[2] = 1 < target
//     - (0, 4) since 0 < 4 and nums[0] + nums[4] = 0 < target
// Note that (0, 3) is not counted since nums[0] + nums[3] is not strictly less than the target.

var countPairs = function (nums, target) {
  nums.sort((a, b) => a - b);

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let isNum = false;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        result++;
        isNum = true;
      } else break;
    }

    if (!isNum) break;
  }

  return result;
};

console.log(countPairs(nums, target));
