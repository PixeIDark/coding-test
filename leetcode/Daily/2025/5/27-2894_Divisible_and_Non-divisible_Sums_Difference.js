// 나누어 떨어지지 않는 수 합 - 나누어 떨어지는 수 합

const n = 10, m = 3
// Output: 19
// Explanation: In the given example:
//     - Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
//     - Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
// We return 37 - 18 = 19 as the answer.

// 1. 반복문에서 각 합을 구해서 계산하기? => 나누어 떨어지지 않으면 더하고 나누어 떨어지면 뺴 하나의 변수로 ㄱ
// 4분
var differenceOfSums = function (n, m) {
    let sum = 0

    for (let i = 1; i <= n; i++) {
        sum += i % m === 0 ? -i : i
    }

    return sum
};

console.log(differenceOfSums(n, m))