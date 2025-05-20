// queries[i] 구간에 있는 요소들을 -1 했을 때 nums 의 모든 요소가 0이 되는지

const nums = [1, 0, 1], queries = [[0, 2]]
// Output: false
// Explanation:
//     For i = 0:
// Select the subset of indices as [1, 2, 3] and decrement the values at these indices by 1.
// The array will become [4, 2, 1, 0].
//     For i = 1:
// Select the subset of indices as [0, 1, 2] and decrement the values at these indices by 1.
// The array will become [3, 1, 0, 0], which is not a Zero Array.

// queries 일일이 하면 복잡도가 너무 높음
// prefix 를 이용해야함
// n + 1 길이의 배열을 만들고, query[0] 위치에 -1 query[1] + 1 위치에 1 을 할당해줌
// [0, -1, 0, 0, 1] => [-1, -1, 0, 1, 1] => [-1, -2, -2, -1, 0]
// prefix 후 원본 배열 요소에 더하고, 합이 0 이 아닌경우 즉시 false 리턴
// 14분
var isZeroArray = function (nums, queries) {
    const n = nums.length
    const arr = Array(n + 1).fill(0)

    for (const [start, end] of queries) {
        arr[start]--
        arr[end + 1]++
    }

    if (nums[0] + arr[0] > 0) return false

    for (let i = 1; i < n; i++) {
        arr[i] += arr[i - 1]
        if (nums[i] + arr[i] > 0) return false
    }

    return true
};

console.log(isZeroArray(nums, queries))