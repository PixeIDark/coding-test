// 각 배열이 자기만 가진 고유한 요소들 반환

const nums1 = [1, 2, 3], nums2 = [2, 4, 6]
// Output: [[1,3],[4,6]]
// Explanation:
//     For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
//     For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums1. Therefore, answer[1] = [4,6].

// 각 배열의 set 을 만들고, set1 과 nums2 비교해서 !has 이면 배열에 추가
// 8분 set 에 difference 메서드 저장되어있음 이거 쓰면좋음
var findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    nums1 = [...set1]
    nums2 = [...set2]
    const result = []

    let arr = []

    for (const num of nums1) {
        if (!set2.has(num)) arr.push(num)
    }

    result.push(arr)
    arr = []

    for (const num of nums2) {
        if (!set1.has(num)) arr.push(num)
    }

    result.push(arr)

    return result
};

console.log(findDifference(nums1, nums2));