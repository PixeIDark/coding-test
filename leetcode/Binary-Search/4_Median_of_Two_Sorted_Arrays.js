// 두 배열 하나의 배열로 만들고, 중앙 값 뽑으면됨. 중앙 값 없으면 두 개 합쳐서 평균값 리턴

const nums1 = [1, 3];
const nums2 = [2];
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

const nums3 = [1, 2];
const nums4 = [3, 4];
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const m = Math.floor(arr.length / 2);

  if (arr.length % 2 === 1) {
    return arr[m];
  } else {
    return (arr[m - 1] + arr[m]) / 2;
  }
};

console.log(findMedianSortedArrays(nums3, nums4));
