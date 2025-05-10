// nums 의 연속된 부분 배열중 요소간의 절대 차이가 limit 이하인 최대 길의 배열 길이 반환

const nums = [10, 1, 2, 4, 7, 2], limit = 5
// Output: 4
// Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.

// dequeue
// 배열 내에서 최대 값과 최소 값을 기록
// dequeue 가 최대 값 전용과 최소 값 전용 각각으로 두개 필요함
// 22분
var longestSubarray = function (nums, limit) {
    const n = nums.length
    const minDequeue = [0]
    const maxDequeue = [0]
    let maxLength = 1
    let left = 0

    for (let right = 1; right < n; right++) {
        while (minDequeue.length && minDequeue[0] < left) minDequeue.shift()

        let diff = Math.max(Math.abs(nums[minDequeue[0]] - nums[right]), Math.abs(nums[maxDequeue[0]] - nums[right]))

        while (diff > limit) {
            left++

            if (minDequeue.length && minDequeue[0] < left) minDequeue.shift()
            if (maxDequeue.length && maxDequeue[0] < left) maxDequeue.shift()

            diff = Math.max(Math.abs((nums[minDequeue[0]] ?? nums[right]) - nums[right]), Math.abs((nums[maxDequeue[0]] ?? nums[right]) - nums[right]))
        }

        while (minDequeue.length && nums[minDequeue[minDequeue.length - 1]] >= nums[right]) minDequeue.pop()
        minDequeue.push(right)

        while (maxDequeue.length && nums[maxDequeue[maxDequeue.length - 1]] <= nums[right]) maxDequeue.pop()
        maxDequeue.push(right)

        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
};

console.log(longestSubarray(nums, limit))