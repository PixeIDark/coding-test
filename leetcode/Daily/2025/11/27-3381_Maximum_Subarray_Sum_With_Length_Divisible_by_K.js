// 길이가 k로 나누어 떨어지는 연속된 부분배열중 합이 가장 큰 배열의 합 반환
// 누적합 배열을 만듬 => 6 ~ 10 인덱스의 합을 구할려면 prefix[10] - prefix[5]
// dp[k], dp[k + 1], dp[k + 2] => dp[k + 2] dp[]
// 25분
var maxSubarraySum = function (nums, k) {
  const prefix = [0];
  nums.reduce((acc, num, i) => {
    const next = acc + num;
    prefix.push(next);
    return next;
  }, 0);

  const n = nums.length;
  const dp = Array(n).fill(-Infinity);

  for (let i = k; i < n + 1; i++) {
    dp[i] = prefix[i] - prefix[i - k] + Math.max(dp[i - k], 0);
  }

  return Math.max(...dp);
};