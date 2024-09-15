// 같은 거 하나라도 있으면 true임

const nums = [1, 2, 3, 1];
// Output : true

var containsDuplicate = function (nums) {
  if (nums.length < 2) return false;

  const set = new Set([...nums]);

  return set.size !== nums.length;
};

console.log(containsDuplicate(nums));
