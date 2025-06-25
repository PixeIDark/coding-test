// - * - 양수 최소 값 구해야하니까 - + 조합 우선
// 첫배열의 제일 작은 수 * 둘배열의 두번째로 작은 수 or 첫배열의 두번째로 작은 수 * 둘배열의 제일 작은 수
// [-4,-3,0,1,2] [-7,-5,4,5,9]
// 일일이 곱해서 배열에 넣고 솔트하면 이론상 가능한데 TLE?
// TODO: 벽
var kthSmallestProduct = function (nums1, nums2, k) {
    const arr = []

    for (const num1 of nums1) {
        for (const num2 of nums2) {
            arr.push(num1 * num2)
        }
    }

    return arr.toSorted((a, b) => a - b)[k - 1]
};