// 0인 요소를 다른 숫자로 대체할 수 있는 두 배열의 모든 요소합이 같은 최소합. 같게 불가능 하면 -1 반환

const nums1 = [0, 0, 10, 10, 12, 0, 13, 6, 0, 2, 10],
    nums2 = [24, 5, 12, 22]
// Output: 12
// Explanation: We can replace 0's in the following way:
// - Replace the two 0's in nums1 with the values 2 and 4. The resulting array is nums1 = [3,2,2,1,4].
// - Replace the 0 in nums2 with the value 1. The resulting array is nums2 = [6,5,1].
//     Both arrays have an equal sum of 12. It can be shown that it is the minimum sum we can obtain.

// 실패 조건 부터. nums1 모든 요소 합 a, 0의 개수 A,  nums2 모든 요소 합 b, 0의 개수 B
// a + B < b + A
// A - B 했는데 양수가 나오고 b 가 더 크면 불가능함
// A - B 음수가 나오고 a 가 더 크면 불가능함
// 1. 각 배열의 0의 개수와 모든 요소의 합 구하기
// 2. A - B, 양수 일시 (A - 1) * 1 을 a에 더함 B * 1 을 b에 더함
// 3. 실패 조건인지 체크하고 위의 조건을 따라서 Math.max 로 큰쪽이 정답임
// 41분
var minSum = function (nums1, nums2) {
    let zero1 = 0
    const sum1 = nums1.reduce((a, b) => {
        if (b === 0) {
            zero1++
            b++
        }
        return a + b
    }, 0)

    let zero2 = 0
    const sum2 = nums2.reduce((a, b) => {
        if (b === 0) {
            zero2++
            b++
        }
        return a + b
    }, 0)

    // zero + sum 합을 서로 비교했을 때 작은쪽에 zero 가 0인지 아닌지임 0 이면 실패
    if ((sum1 < sum2 && zero1 === 0) || (sum1 > sum2 && zero2 === 0)) return -1

    return Math.max(sum1, sum2)
};

console.log(minSum(nums1, nums2))