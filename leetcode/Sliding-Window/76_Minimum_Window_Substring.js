// t로 최소 윈도우 만들고 반환

const s = "ADOBACODEBANC";
const t = "ABC";
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// 1. 어케 하냐.. r, l 로 윈도우를 만들어서 s에서 크기 조절하며 비교해
// 2. 비교 대상은 t를 분해해서 chatCodeAt로 만든 배열이나 해시 맵으로 ㄱㄱ
// 3. 윈도우 찾을 때마다 전 윈도우랑 비교 후 갱신.
// 4. 도저히 못하겠다.
var minWindow = function (s, t) {
  // t의 문자 빈도수를 저장할 Map
  let map = new Map();
  for (let char of t) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let left = 0,
    right = 0;
  let count = map.size; // 찾아야 할 고유 문자의 수
  let minLen = Infinity;
  let minWindow = "";

  while (right < s.length) {
    // 오른쪽 포인터 이동
    let rightChar = s[right];
    if (map.has(rightChar)) {
      map.set(rightChar, map.get(rightChar) - 1);
      if (map.get(rightChar) === 0) count--;
    }

    // 모든 문자를 찾았을 때
    while (count === 0) {
      // 최소 윈도우 갱신
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minWindow = s.slice(left, right + 1);
      }

      // 왼쪽 포인터 이동
      let leftChar = s[left];
      if (map.has(leftChar)) {
        map.set(leftChar, map.get(leftChar) + 1);
        if (map.get(leftChar) > 0) count++;
      }
      left++;
    }

    right++;
  }

  return minWindow;
};

console.log(minWindow(s, t));
