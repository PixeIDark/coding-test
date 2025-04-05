// xor 부분 집합 모든 합

const nums = [1, 5, 6]
// Output: 28
// Explanation: The 8 subsets of [5,1,6] are:
//     - The empty subset has an XOR total of 0.
// - [5] has an XOR total of 5.
// - [1] has an XOR total of 1.
// - [6] has an XOR total of 6.
// - [5,1] has an XOR total of 5 XOR 1 = 4.
//     - [5,6] has an XOR total of 5 XOR 6 = 3.
//     - [1,6] has an XOR total of 1 XOR 6 = 7.
//     - [5,1,6] has an XOR total of 5 XOR 1 XOR 6 = 2.
// 0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28

// 걍 브루트포 ㅡㅅ ㄱㄱ
// 10 + 6 + 0 + 2 + 6
console.log((1 | 5 | 6) << 2) // 이걸 어케 떠올려??
var subsetXORSum = function (nums) {
    const n = nums.length

    const dfs = (idx, acc) => {
        if (idx === n) {
            return acc
        }

        let result = 0
        for (let i = idx; i < n; i++) {
            result += dfs(i + 1, acc)
            acc ^= nums[i]
        }

        return result + acc
    }

    return dfs(0, 0)
};
// 걍 자괴감이 든다.. 비트를 이용해서 n 으로 푸는방법을 떠올리는게 가능한가? 이런생각이 하염없이 든다..
console.log(subsetXORSum(nums));
// console.log(5 ^ 1 ^ 6 | 1) // 상쇄 시킬 수 있다. ^는 |로 상쇄됨
// 5 ^ 6 = 5 ^ 1 ^ 6 | 1

