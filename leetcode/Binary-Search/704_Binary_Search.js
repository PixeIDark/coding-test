// target에 해당하는 index 찾기 없으면 -1 반환

const nums = [5];
const target = 5;
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// 존나쉬운데 indexOf 안써야겠지?
// while, map, set 뭐가좋지\
// 존나어려움 O(log n)복잡도로 해야함.
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      return m;
    } else if (nums[m] < target) {
      l = m + 1;
    } else r = m - 1;
  }
  return -1;
};

console.log(search(nums, target));
