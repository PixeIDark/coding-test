// 홀짝 되는지

const nums = [4, 3, 1, 6];
// Output: false
// Explanation: nums[1] and nums[2] are both odd. So the answer is false.

// ruler가 계속 바껴야함. === ruler 1 or 0
var isArraySpecial = function (nums) {
  let ruler = nums[0] % 2;

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    ruler = ruler === 0 ? 1 : 0;
    if (num % 2 !== ruler) return false;
  }

  return true;
};

console.log(isArraySpecial(nums));
