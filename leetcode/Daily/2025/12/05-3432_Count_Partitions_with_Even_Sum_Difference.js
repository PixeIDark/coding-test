// 짝수를 짝수로 뺴면 짝수
// 홀수를 홀수로 뺴면 짝수
// 짝수를 홀수로 뺴면 홀수
// 홀수를 짝수로 빼면 홀수
// prefix 배열 만들어서 비교
// 10분
var countPartitions = function (nums) {
  const n = nums.length;
  const prefix = Array(n).fill(0);
  prefix[0] = nums[0];

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }

  // [ 10, 20, 23, 30, 36 ]
  const max = prefix.pop();
  let result = 0;

  for (let i = 0; i < prefix.length; i++) {
    if (Math.abs(prefix[i] * 2 - max) % 2 === 0) result++;
  }

  return result;
};