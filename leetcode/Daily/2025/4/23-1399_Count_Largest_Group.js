// 각 자리수의 합이 같은 얘들을 그룹으로 묶을 때 최대 크기의 그룹 수


const n = 100000
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
//     There are 4 groups with largest size.

// map 형식으로 해서 키를 합, 값을 개수로 해서 만듬
// 자료구조를 만드는 도중에 최대 값의 수가 나오면 기준을 만들어 놓고 해당하는 개수가 몇개인지 기록
var countLargestGroup = function (n) {
    const digits = new Map()
    let maxValue = 0
    let count = 0

    for (let i = 1; i <= n; i++) {
        const str = String(i)
        let sum = 0
        x
        for (let j = 0; j < str.length; j++) {
            const num = Number(str[j])
            sum += num
        }

        const value = (digits.get(sum) ?? 0) + 1
        digits.set(sum, value)

        if (value > maxValue) {
            count = 1
            maxValue = value
        } else if (value === maxValue) count++
    }

    return count
};

console.log(countLargestGroup(n))