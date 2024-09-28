// 배열 던져주고 순서바꾼거 하위집합 뽑아서 배열 만들면됨.

Input: nums = [1, 2, 3];
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 1.
var permute = function (nums) {
  const result = [];

  if (nums.length === 1) {
    result.push([nums[0]]);
    return result;
  }

  for (let i = 0; i < nums.length; i++) {
    const n = nums.filter((_, k) => i !== k);
    const perms = permute(n);
    for (const perm of perms) {
      perm.push(nums[i]);
      result.push([...perm]);
    }
  }
  return result;
};

console.log(permute(nums));
