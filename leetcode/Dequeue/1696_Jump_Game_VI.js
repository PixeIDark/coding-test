// -1 인덱스에서 시작해서 n - 1 까지 k 거리 이하로 점프하면서 얻을수 있는 최대 점수

const nums = [1, -5, -20, 4, -1, 3, -6, -3], k = 2
// Output: 7
// Explanation: You can choose your jumps forming the subsequence [1,-1,4,3] (underlined above). The sum is 7.

// [n - 1] 값은 무조건 포함됨
// dp 에 해당 인덱스가 낼수 있는 최대 값을 기록하면서 전진
// 62분
var maxResult = function (nums, k) {
    const n = nums.length
    const dp = new Int32Array(n)
    const dequeue = [n - 1]
    dp[n - 1] = nums[n - 1]
    // 음수면 밣지말고 피해가고 어쩔수 없이 밣는 경우는 최소로
    // dp 는 i 인덱스를 무조건 받아들이는 전제임

    // dp[i + 1] ~ dp[i + k] 사이를 dequeue 로 정리해야해
    // 이 사이의 최대값을 저장해서 꺼내써야해
    for (let i = n - 2; i >= 0; i--) {
        while (dequeue.length && dequeue[0] > i + k) {
            dequeue.shift()
        }

        dp[i] += dp[dequeue[0]] + nums[i]

        while (dequeue.length && dp[dequeue[dequeue.length - 1]] <= dp[i]) {
            dequeue.pop()
        }

        dequeue.push(i)
    }

    return dp[0]
};

console.log(maxResult(nums, k));