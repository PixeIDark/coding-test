// 크기가 k 인 윈도우가 슬라이딩 할때 마다 배열 내의 최대 값을 배열에 담아서 반환

const nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
//     Window position                Max
// ---------------               -----
//     [1  3  -1] -3  5  3  6  7       3
// 1 [3  -1  -3] 5  3  6  7       3
// 1  3 [-1  -3  5] 3  6  7       5
// 1  3  -1 [-3  5  3] 6  7       5
// 1  3  -1  -3 [5  3  6] 7       6
// 1  3  -1  -3  5 [3  6  7]      7

// deque
// 1. [0] 에 항상 최대 값이 존재해야함
// 2. 인덱스 벗어나는 요소 자동 삭제
// 3. 새 요소보다 작은 요소돌도 삭제
// 34분
var maxSlidingWindow = function (nums, k) {
    const result = []
    const dequeue = []
    const n = nums.length

    for (let i = 0; i < n; i++) {
        while (dequeue.length && dequeue[0] <= i - k) {
            dequeue.shift()
        }

        while (dequeue.length && nums[dequeue[dequeue.length - 1]] < nums[i]) {
            dequeue.pop()
        }

        dequeue.push(i)

        if (i >= k - 1) result.push(nums[dequeue[0]])
    }

    return result
};

console.log(maxSlidingWindow(nums, k))