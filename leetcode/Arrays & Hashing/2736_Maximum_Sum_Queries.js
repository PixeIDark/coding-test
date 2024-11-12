// queries 0, 1은 각 nums1, nums2가 가질 수 있는 최소 값임. 즉 요소가 query 보다는 커야함. nums index 는 동일.

const nums1 = [4, 3, 1, 2],
  nums2 = [2, 4, 9, 5],
  queries = [
    [4, 1],
    [1, 3],
    [2, 5],
  ];
// Output: [6,10,7]
// Explanation:
//     For the 1st query xi = 4 and yi = 1, we can select index j = 0 since nums1[j] >= 4 and nums2[j] >= 1. The sum nums1[j] + nums2[j] is 6, and we can show that 6 is the maximum we can obtain.
//     For the 2nd query xi = 1 and yi = 3, we can select index j = 2 since nums1[j] >= 1 and nums2[j] >= 3. The sum nums1[j] + nums2[j] is 10, and we can show that 10 is the maximum we can obtain.
//     For the 3rd query xi = 2 and yi = 5, we can select index j = 3 since nums1[j] >= 2 and nums2[j] >= 5. The sum nums1[j] + nums2[j] is 7, and we can show that 7 is the maximum we can obtain.
//     Therefore, we return [6,10,7].

// 이진 탐색을 각각하는게 아니라 하나로 통합해서 인덱스 값을 서로 맞추고 비교해야함.
// num 는 자기 자신의 원래 인덱스를 가지고 오름차순으로 정렬.
// [1, 2], [2, 3], [3, 1], [4, 0] 이중 선택 가능한 인덱스를 반환
// [2, 0], [4, 1], [5, 3], [9, 2] 이중 선택 가능한 인덱스를 반환
// 두개의 인덱스 비교해서 가장 큰 값을 기준으로 반환 <= 이 부분을 이진 탐색 해야할듯.
var maximumSumQueries = function (nums1, nums2, queries) {
  const temp1 = nums1
    .map((num, idx) => {
      return [num, idx];
    })
    .sort((a, b) => a[0] - b[0]);
  const temp2 = nums2
    .map((num, idx) => {
      return [num, idx];
    })
    .sort((a, b) => a[0] - b[0]);

  // 조사할 index 의 범위를 특정해야함. 즉, query 보다 작아지는 index 를 제외 이걸 이진 탐색으로 어케 하냐..
  // 걍 끝에서 부터 비교.
  const stack = [];

  for (let i = 0; i < queries.length; i++) {
    let n1 = -1;
    let n2 = -1;
    let maxIndex = -1;
    for (let j = 0; j < nums2.length; j++) {
      if (queries[i][0] > temp1[j][0]) {
        n1 = Math.max(n1, temp1[j][1]);
      }

      if (queries[i][0] > temp2[j][0]) {
        n2 = Math.max(n2, temp2[j][1]);
      }
    }
    maxIndex = Math.min(n1, n2);
    stack.push(maxIndex);
  }

  const result = [];
  for (let i = 0; i < stack.length; i++) {
    let max = -1;
    if (stack[i] === -1) result.push(-1);
    for (let j = 0; j <= stack[i]; j--) {
      max = Math.max(nums1[j] + nums2[j], max);
    }
    result.push(max);
  }
  return result;
};

console.log(maximumSumQueries(nums1, nums2, queries));
