// 반복되는거 반환

// Input: nums = [1,3,4,2,2]
// Output: 2

// set
var findDuplicate = function (nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return num;
    }
    set.add(num);
  }

  return -1;
};

// var findDuplicate = function(nums) {
//   let slow = nums[0];
//   let fast = nums[0];

//   // Find the intersection point of the two runners
//   do {
//       slow = nums[slow];
//       fast = nums[nums[fast]];
//   } while (slow !== fast);

//   // Find the entrance to the cycle
//   slow = nums[0];
//   while (slow !== fast) {
//       slow = nums[slow];
//       fast = nums[fast];
//   }

//   return slow;
// };
