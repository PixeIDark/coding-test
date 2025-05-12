// digit 조합해서 3자릿 수의 짝수들 반환 맨앞 0 안되고, 중복도 안됨.

const digits = [2, 1, 3, 0]
// Output: [102,120,130,132,210,230,302,310,312,320]
// Explanation: All the possible integers that follow the requirements are in the output array.
//     Notice that there are no odd integers or integers with leading zeros.

// 첫 숫자가 0 일 시에는 재귀 안돌게 하기
// 맨 마지막 숫자가 짝수일 때에만 set 에 넣기
// 모든 digit 가 홀수이면 빈 배열 반환
// 18분
var findEvenNumbers = function (digits) {
    const n = digits.length
    const freq = {}
    const nums = []

    for (const digit of digits) freq[digit] = (freq[digit] ?? 0) + 1

    for (let i = 100; i <= 998; i += 2) {
        const str = String(i)
        const map = new Map

        for (const char of str) map.set(char, (map.get(char) ?? 0) + 1)

        let isPass = true
        for (const [key, value] of map) {
            const count = freq[key] ?? 0
            if (count < value) {
                isPass = false
            }
        }

        if (isPass) nums.push(i)
    }

    return nums
};

console.log(findEvenNumbers(digits));