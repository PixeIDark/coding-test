// k 를 edge 대로 XOR 시켜서 nums 요소를 변경 시킬 수 있고, nums 의 최대합

const nums = [2, 3], k = 7, edges = [[0, 1]]
// Output: 9
// Explanation: Alice can achieve the maximum sum of 9 using a single operation:
//     - Choose the edge [0,1]. nums[0] becomes: 2 XOR 7 = 5 and nums[1] become: 3 XOR 7 = 4, and the array nums becomes: [2,3] -> [5,4].
//     The total sum of values is 5 + 4 = 9.
// It can be shown that 9 is the maximum achievable sum of values.

// edges 를 생각안해도됨 짝수번째에는 원래대로 회귀 2개씩 확인
// 32분
var maximumValueSum = function (nums, k, edges) {
    const n = nums.length
    const incomes = []
    let total = 0

    for (const num1 of nums) {
        const num2 = num1 ^ k

        total += num1
        incomes.push(num2 - num1)
    }

    incomes.sort((a, b) => b - a)

    for (let i = 0; i < n - 1; i += 2) {
        total = Math.max(total, total + incomes[i] + incomes[i + 1])
    }

    return total
};

console.log(maximumValueSum(nums, k, edges))