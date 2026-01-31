// letters 요소중 target 보다 사전순으로 큰 가장 작은 사전순 문자 반환
// 1. letters 에 target 푸시하고 정렬
// 2. target 찾아서 주변 문자열 반환
// 7분
var nextGreatestLetter = function (letters, target) {
  const n = letters.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target < letters[mid]) right = mid - 1;
    else left = mid + 1;
  }

  if (left >= n) return letters[0];

  return letters[left];
};