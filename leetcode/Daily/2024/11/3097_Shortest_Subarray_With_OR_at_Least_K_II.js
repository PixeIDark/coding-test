// nums 의 부분배열 중 요소 전체에 or 연산을 했을 때, k 이상인 부분 배열 중 최소 길이를 가진 녀석 출력 없으면 -1출력.

const nums = [1, 2, 3],
  k = 2;
// Output: 1
// Explanation: The subarray [3] has OR value of 3. Hence, we return 1.

function minimumSubarrayLength(nums, k) {
  let ans = Infinity;
  let ors = 0;
  let count = new Array(30).fill(0);
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    ors = updateOr(ors, nums[right], count);

    while (ors >= k && left <= right) {
      ans = Math.min(ans, right - left + 1);
      ors = undoOr(ors, nums[left], count);
      left++;
    }
  }

  return ans === Infinity ? -1 : ans;
}

function updateOr(ors, num, count) {
  for (let i = 0; i < 30; i++) {
    if ((num >> i) & 1 && ++count[i] === 1) {
      ors |= 1 << i;
    }
  }
  return ors;
}

function undoOr(ors, num, count) {
  for (let i = 0; i < 30; i++) {
    if ((num >> i) & 1 && --count[i] === 0) {
      ors ^= 1 << i;
    }
  }
  return ors;
}
