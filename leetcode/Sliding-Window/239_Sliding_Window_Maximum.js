const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// 양방향 큐로 조져보자
var maxSlidingWindow = function (nums, k) {
  const queue = [];
  const result = [];

  for (let i = 0; i < k; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
  }
  result.push(nums[queue[0]]);

  for (let i = k; i < nums.length; i++) {
    if (queue[0] <= i - k) {
      queue.shift();
    }

    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    queue.push(i);
    result.push(nums[queue[0]]);
  }

  return result;
};

console.log(maxSlidingWindow(nums, k));
