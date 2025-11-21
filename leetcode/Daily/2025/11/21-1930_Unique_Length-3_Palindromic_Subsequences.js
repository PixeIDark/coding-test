// 길이가 3인 펜린드롬인 부분수열 개수 반환
// 부분수열로 완성한 펜린드롬은 한 번만 계산함
// 26 * 26 이 최대 반환 값.
// 요소를 이진법으로 하고 x ^ x = 0, x ^ y ^ x = 0 ^ y = y
// 이진법으로 어케 푼다는거지?? 걍 유니크 판별 원툴임
// 56분
var countPalindromicSubsequence = function (s) {
  // 첫 순회하면서 오른쪽 맵을 만들어
  // 그 후 다시 순회하면서 왼쪽맵을 만들고 오른쪽맵을 하나씩 제거해
  // 왼쪽과 오른쪽 맵의 총 keys를 구하고, keys를 set에 담고 개수 비교 줄은만큼 카운팅

  const left = Array(26).fill(Infinity);
  const right = Array(26).fill(-1);

  for (let i = 0; i < s.length; i++) {
    const code = s[i].charCodeAt(0) - 97;
    if (left[code] === Infinity) left[code] = i;
    right[code] = i;
  }

  let result = 0;

  for (let i = 0; i < 26; i++) {
    const l = left[i];
    const r = right[i];
    let bit = 0;

    for (let j = l + 1; j < r; j++) {
      bit |= (1 << (s[j].charCodeAt(0) - 97));
    }

    result += bit.toString(2).split("1").length - 1;
  }

  return result;
};