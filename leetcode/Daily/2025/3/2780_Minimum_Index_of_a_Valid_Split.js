// length < 지배수 개수 * 2 의 조건 충족하는 배열들 만들수 있는 최소 인덱스

const nums = [1, 2, 2, 2]
// Output: 2
// Explanation: We can split the array at index 2 to obtain arrays [1,2,2] and [2].
//     In array [1,2,2], element 2 is dominant since it occurs twice in the array and 2 * 2 > 3.
// In array [2], element 2 is dominant since it occurs once in the array and 1 * 2 > 1.
// Both [1,2,2] and [2] have the same dominant element as nums, so this is a valid split.
//     It can be shown that index 2 is the minimum index of a valid split.

// 키 값이 요소고, 밸류 값이 개수인 객체를 두개 만들어서 진행에따라 채워준다
// 동일한 지배적 요소여야함
var minimumIndex = function (nums) {
    const aMap = new Map()
    const bMap = new Map()

    for (const num of nums) {
        bMap.set(num, (bMap.get(num) ?? 0) + 1)
    }

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        aMap.set(num, (aMap.get(num) ?? 0) + 1)
        bMap.set(num, bMap.get(num) - 1)

        if (aMap.get(num) * 2 > i + 1 && bMap.get(num) * 2 > (nums.length - 1 - i)) return i
    }


    return -1
};

console.log(minimumIndex(nums));