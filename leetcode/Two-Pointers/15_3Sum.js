// 3개의 합 0 되는 요소들 출력 없으면 []

const nums = [-1, 0, 1, 2, -1, -4];
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// key = 인덱스, value = 요소인 맵 만듬.
// 순환 돌리기. 선택된 인덱스의 요소 값이 기준이 되어야함.
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if (sum === 0) {
        result.push([nums[i], nums[l], nums[r]]);

        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;

        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return result;
};

console.log(threeSum(nums));
