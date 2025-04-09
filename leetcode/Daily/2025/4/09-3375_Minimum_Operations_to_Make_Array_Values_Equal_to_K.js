// 임의의 정수 h보다 엄격히 큰 요소가 모두 같을 경우 요소들을 h 로 바꿀 수 있음. 이때 이 작업을 몇 번해야 k로 모두 바꿀 수 있는지. 안되면 -1

const nums = [1], k = 1
// Output: 2
// Explanation: The operations can be performed in order using valid integers 4 and then 2.

// k 보다 작은 숫자있으면 -1 반환 바꿀수가 없음.
// set 에 k 보다 큰 숫자 넣으면서, 작은 얘 있으면 바로 -1 반환해보자
// set.size 가 곧 작업 횟수
var minOperations = function (nums, k) {
    // 순회 안하고 작은 얘 찾는법? 비트? sort 하고 [0] 이랑 k 비교해볼까? 흠..
    // 더 느림 ㅋㅋ 로직은 더 간단
    nums.sort((a, b) => a - b)
    if (nums[0] < k) return -1

    const set = new Set(nums)
    set.delete(k)

    return set.size
};

console.log(minOperations(nums, k))