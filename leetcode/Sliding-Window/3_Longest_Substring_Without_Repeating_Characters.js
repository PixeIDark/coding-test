// 중복된 문자열 없는 문자열 길이

const s = "advdf";
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// set과 일반 배열 비교로 풀자
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let l = 0;
  let maxSize = 0;
  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    maxSize = Math.max(maxSize, r - l + 1);
  }
  return maxSize;
};

console.log(lengthOfLongestSubstring(s));
