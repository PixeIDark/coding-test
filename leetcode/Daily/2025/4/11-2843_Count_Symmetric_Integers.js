// 대칭 개수 반환

const low = 1200, high = 1230
// Output: 9
// Explanation: There are 9 symmetric integers between 1 and 100: 11, 22, 33, 44, 55, 66, 77, 88, and 99.

// 0, 2 [1] 이건가? 0 1 0 3 0 5
var countSymmetricIntegers = function (low, high) {

    let result = 0

    for (let i = low; i <= high; i++) {
        const str = String(i)
        const n = str.length

        if (n % 2) continue

        let left = 0
        let right = 0
        let start = 0
        let end = n - 1

        while (start < end) {
            left += Number(str[start])
            right += Number(str[end])

            start++
            end--
        }

        if (left === right) result++
    }

    return result
};

console.log(countSymmetricIntegers(low, high))