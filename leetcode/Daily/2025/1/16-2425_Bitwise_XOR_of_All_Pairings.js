// 각 요소 끼리 xor 후 출력 값들도 xor

const nums1 = [2, 1, 3],
  nums2 = [10, 2, 5, 0];
// Output: 0
// Explanation:
//     All possible pairs of bitwise XORs are nums1[0] ^ nums2[0], nums1[0] ^ nums2[1], nums1[1] ^ nums2[0],
//     and nums1[1] ^ nums2[1].
//     Thus, one possible nums3 array is [2,5,1,6].
// 2 ^ 5 ^ 1 ^ 6 = 0, so we return 0.

// num1 = [a, b], num2 = [c, d]
// a ^ c ^ a ^ d ^ b ^ c ^ b ^ d
// 상대 num 으 length 가 짝수면 0 홀수면 자기 자신이 나옴
var xorAllNums = function (nums1, nums2) {
  const arr1 = nums2.length % 2 === 0 ? [0] : [...nums1];
  const arr2 = nums1.length % 2 === 0 ? [0] : [...nums2];

  const result = [...arr1, ...arr2];

  return result.reduce((a, b) => a ^ b, 0);
};

console.log(xorAllNums(nums1, nums2));
