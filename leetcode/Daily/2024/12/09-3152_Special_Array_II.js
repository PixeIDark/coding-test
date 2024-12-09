// 쿼리 기준 홀짝 규칙 맞는지 여부

const nums = [3, 4, 1, 2, 6],
  queries = [[0, 4]];
// Output: [false,true]
// Explanation:
//     The subarray is [4,3,1]. 3 and 1 are both odd. So the answer to this query is false.
//     The subarray is [1,6]. There is only one pair: (1,6) and it contains numbers with different parity. So the answer to this query is true.

// nums.length + queries.length
var isArraySpecial = function (nums, queries) {
  // 영역별로 증가시키자.
  // 폐급인 구간들은 0
  let k = 1;
  const dp = new Array(nums.length).fill(0);
  dp[0] = k;

  // const state = nums[0] % 2 === 1 ? "홀" : "짝";
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    // nums = [4, 3, 1, 3, 5, 9]
    if (prev % 2 === curr % 2) {
      k++;
    }
    dp[i] = k;

    prev = curr;
  }

  return queries.map(([start, end]) => dp[start] === dp[end]);
};

console.log(isArraySpecial(nums, queries));
