// 최대 금액 (원형임 구조가)

const nums = [4, 1, 2];
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// 기존과 다르게 length가 홀수면, 홀수 인덱스 시작은 마지막 집을 못텀.
// 마지막 값이 첫 값보다 크면 첫 값을 shift, 반대면 pop
var rob = function (nums) {
  if (nums.length === 3) return Math.max(nums[0], nums[1], nums[2]);
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  if (nums.length === 1) return nums[0];

  const choice = (start, end) => {
    let threePrev = nums[start];
    let twoPrev = nums[start + 1];
    let onePrev = nums[start] + nums[start + 2];
    let max = Math.max(onePrev, twoPrev);

    for (let i = start + 3; i < end; i++) {
      let curr = Math.max(twoPrev, threePrev) + nums[i];
      max = Math.max(max, curr);
      threePrev = twoPrev;
      twoPrev = onePrev;
      onePrev = curr;
    }

    return max;
  };
  return Math.max(choice(0, nums.length - 1), choice(1, nums.length));
};

console.log(rob(nums));
