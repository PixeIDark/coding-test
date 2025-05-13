// 배열에서 한 요소를 비게 만들어 부분 배열을 만들수 있고 이때 j - i <= k 여야함

const nums = [-5266, 4019, 7336, -3681, -5767], k = 2
// Output: 37
// Explanation: The subsequence is [10, 2, 5, 20].

// dp
// dp 매 인덱스가 가져올 수 있는 최대 값을 저장해야함
// i - 1 ~ i - k 중 최대 값을 가져와야함
// 하루 - 문제 과대 해석해서 도망쳤었음
var constrainedSubsetSum = function (nums, k) {
    const n = nums.length
    const dequeue = [0]
    const dp = new Int32Array(n)
    let max = nums[0]
    dp[0] = max

    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(nums[i] + dp[dequeue[0]], nums[i])
        max = Math.max(max, dp[i])

        while (dequeue.length && dequeue[0] <= i - k) dequeue.shift()
        while (dequeue.length && dp[dequeue[dequeue.length - 1]] <= dp[i]) dequeue.pop()

        dequeue.push(i)
    }

    return max
};

console.log(constrainedSubsetSum(nums, k))