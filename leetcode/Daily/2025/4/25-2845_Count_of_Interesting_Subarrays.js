// 요소 % 모듈 === 아름다운 요소 개수 % 모듈 인 하위배열 개수

const nums = [4, 5], modulo = 1, k = 0
// Output: 3
// Explanation: In this example the interesting subarrays are:
//     The subarray nums[0..0] which is [3].
// - There is only one index, i = 0, in the range [0, 0] that satisfies nums[i] % modulo == k.
// - Hence, cnt = 1 and cnt % modulo == k.
//     The subarray nums[0..1] which is [3,2].
// - There is only one index, i = 0, in the range [0, 1] that satisfies nums[i] % modulo == k.
// - Hence, cnt = 1 and cnt % modulo == k.
//     The subarray nums[0..2] which is [3,2,4].
// - There is only one index, i = 0, in the range [0, 2] that satisfies nums[i] % modulo == k.
// - Hence, cnt = 1 and cnt % modulo == k.
//     It can be shown that there are no other interesting subarrays. So, the answer is 3.

// 배열을 일일이 만들면 가능해 기능은
// 연속적인 배열이야.
// nums 의 길이와 같고, nums 의 요소를 % modulo === k 인지를 나타내는 복제 배열을 만든다
// 복제배열은 k 아니면 0 이고 아니면 자기 다음의 얘들 중에서 다음 k 까지의 거리를 나타내게 한다
var countInterestingSubarrays = function (nums, modulo, k) {
    const map = new Map([[0, 1]])
    let count = 0
    let result = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % modulo === k) count++

        const curr = count % modulo

        const prev = (curr - k + modulo) % modulo

        if (map.has(prev)) {
            result += map.get(prev)
        }

        map.set(curr, (map.get(curr) ?? 0) + 1)
    }

    return result
};

console.log(countInterestingSubarrays(nums, modulo, k));