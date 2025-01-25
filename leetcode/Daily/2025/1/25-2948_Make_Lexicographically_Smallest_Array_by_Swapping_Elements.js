// 사전적으로 잘 정렬하기

const nums = [1, 5, 3, 9, 8],
  limit = 2;
// Output: [1,6,7,18,1,2]
// Explanation: Apply the operation 3 times:
//     - Swap nums[1] with nums[2]. The array becomes [1,6,7,18,2,1]
// - Swap nums[0] with nums[4]. The array becomes [2,6,7,18,1,1]
// - Swap nums[0] with nums[5]. The array becomes [1,6,7,18,1,2]
// We cannot obtain a lexicographically smaller array by applying any more operations.

// 노드로 취급해버리자
// 인덱스 번호 달고 sort 시켜

var lexicographicallySmallestArray = function (nums, limit) {
  const edges = nums.map((n, i) => [n, i]).sort((a, b) => a[0] - b[0]);

  const groups = [];
  let currGroups = [edges[0]];

  for (let i = 1; i < nums.length; i++) {
    if (edges[i][0] - edges[i - 1][0] <= limit) currGroups.push(edges[i]);
    else {
      groups.push(currGroups);
      currGroups = [edges[i]];
    }
  }
  groups.push(currGroups);

  for (const group of groups) {
    const values = group.map((a) => a[0]);
    const indexes = group.map((a) => a[1]).sort((a, b) => a - b);

    for (let i = 0; i < values.length; i++) {
      nums[indexes[i]] = values[i];
    }
  }

  return nums;
};

console.log(lexicographicallySmallestArray(nums, limit));
