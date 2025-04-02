// 순환하는 nums 중에서 해당 인덱스 요소보다 첫번째로 큰 요소 넣기 없으면 -1

const nums = [5, 4, 3, 2, 1]
// Output: [-1,5,5,5,5]

// 모노토닉 스택에서 일반적으로 없으면 빠지지만 대신에 -1을 채우면 되는듯.
// nums를 개조해서 length -1 더 키워줘야함
var nextGreaterElements = function (nums) {
    const n = nums.length
    const result = Array(n).fill(-1)
    const monotonicStack = []

    for (let i = 0; i < n * 2; i++) {
        const num = nums[i % n]
        while (monotonicStack.length && nums[monotonicStack[monotonicStack.length - 1]] < num) {
            result[monotonicStack.pop()] = num
        }

        if (i < n) monotonicStack.push(i)
    }

    return result
};

console.log(nextGreaterElements(nums))