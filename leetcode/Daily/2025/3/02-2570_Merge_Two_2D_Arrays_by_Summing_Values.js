// 두번쨰 요소 합쳐서 반환

const nums1 = [[2, 4], [3, 6], [5, 5]], nums2 = [[1, 3], [4, 3]]
// Output: [[1,6],[2,3],[3,2],[4,6]]
// Explanation: The resulting array contains the following:
// - id = 1, the value of this id is 2 + 4 = 6.
// - id = 2, the value of this id is 3.
// - id = 3, the value of this id is 2.
// - id = 4, the value of this id is 5 + 1 = 6.

// id 가 둘 다 없으면 0 이 나와야함.
// num1 과 num2 의 맨 뒷부분 id 를 캐치해서 id 최대값을 구해
// 1부터 id 최대값까지 움직이는 포문
var mergeArrays = function (nums1, nums2) {
    const minId = Math.min(nums1[0][0], nums2[0][0])
    const maxId = Math.max(nums1[nums1.length - 1][0], nums2[nums2.length - 1][0])
    const result = []

    let q = 0
    let w = 0
    for (let i = minId; i <= maxId; i++) {
        let sum = 0
        let id = 0

        if (nums1[q] && nums1[q][0] === i) {
            sum += nums1[q][1]
            id = i
            q++
        }

        if (nums2[w] && nums2[w][0] === i) {
            sum += nums2[w][1]
            id = i
            w++
        }

        if (id) result.push([id, sum])
    }

    return result
};

console.log(mergeArrays(nums1, nums2));