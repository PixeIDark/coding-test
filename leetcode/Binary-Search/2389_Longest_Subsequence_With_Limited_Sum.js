// 가장 큰 배열 길이 반환 query 보다 작거나 같으면서 0 도 나올 수 있음.

const nums = [4, 5, 2, 1],
  queries = [3, 10, 21];
// Output: [2,3,4]
// Explanation: We answer the queries as follows:
//     - The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, so answer[0] = 2.
//     - The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, so answer[1] = 3.
//     - The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, so answer[2] = 4.

// nums 오름차 정렬
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);
  const dp = new Array(nums.length + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    dp[i + 1] = dp[i] + nums[i];
  }

  console.log(dp);
  // 이진 탐색으로 가장 근접한수 찾기 left 가 되야함.
  const result = [];

  for (const query of queries) {
    let left = 0;
    let right = dp.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (query < dp[mid]) right = mid;
      else left = mid + 1;
    }
    result.push(left - 1);
  }

  return result;
};
console.log(answerQueries(nums, queries));
