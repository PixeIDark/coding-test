// 요소가 같으면 인덱스 끼리 곱하고 k 로 나누어떨어지면 + 1

const nums = [10, 2, 3, 4, 9, 6, 3, 10, 3, 6, 3, 9, 1], k = 4
// Output: 4
// Explanation:
//     There are 4 pairs that meet all the requirements:
//     - nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
// - nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
// - nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
// - nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.

// nums 의 요소를 map 키로 하고 밸류는 nums 인덱스로 이루어진 배열
// ! 인덱스 중 하나라도 k로 나누어 떨어지면 두 인덱스가 곱해져도 나누어 떨어져
// 인덱스 둘다 안나누어 떨어져도 곱하면 나누어 떨어질 수도 있음
var countPairs = function (nums, k) {
    let result = 0
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (!map.has(num)) {
            map.set(num, [i])
            continue
        }

        map.get(num).push(i)
        if (i % k === 0) {
            result += map.get(num).length - 1
            continue
        }

        for (let j = 0; j < map.get(num).length - 1; j++) {
            if ((map.get(num)[j] * i) % k === 0) {
                result++;
            }
        }

    }

    return result
};

console.log(countPairs(nums, k));