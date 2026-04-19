// 감소하는 두 배열 유효한 쌍 최대 거리 반환
// 인덱스와 값 모두 num2가 num1보다 크거나 같으면 유효한 쌍
// num1[i] 에서 num2[j] 부터 유효하면 j++, 아니면 i++
// 인덱스 유효하면 스킵, 아니면 j++
// 21분
var maxDistance = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let result = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      result = Math.max(result, j - i);
      j++;
    } else {
      i++;
    }
  }

  return result;
};