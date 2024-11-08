// maximumBit의 범위 안의 k값과 XOR결과 값을 XOR했을 때 최대값이 나오는 k를 배열로 출력

const nums = [2, 3, 4, 7],
  maximumBit = 3;
// Output: [0,3,2,3]
// Explanation: The queries are answered as follows:
// 1st query: nums = [0,1,1,3], k = 0 since 0 XOR 1 XOR 1 XOR 3 XOR 0 = 3.
// 2nd query: nums = [0,1,1], k = 3 since 0 XOR 1 XOR 1 XOR 3 = 3.
// 3rd query: nums = [0,1], k = 2 since 0 XOR 1 XOR 2 = 3.
// 4th query: nums = [0], k = 3 since 0 XOR 3 = 3.

// dp로 XOR 값 저장해 놓자. [0, 0 XOR 1, 0 XOR 1 XOR 1, 0 XOR 1 XOR 1 XOR 3]
var getMaximumXor = function (nums, maximumBit) {
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] ^ nums[i];
  }

  const result = [];
  const max = Math.pow(2, maximumBit) - 1;

  for (let i = dp.length - 1; i >= 0; i--) {
    // maximumBit의 값으로 k 값의 범위를 캐치하고, 최대값 어케 되지? 둘다 안겹쳐야 1이뜸. 최대한 안겹치게 비교

    result.push(dp[i] ^ max);
  }

  return result;
};

console.log(getMaximumXor(nums, maximumBit));
