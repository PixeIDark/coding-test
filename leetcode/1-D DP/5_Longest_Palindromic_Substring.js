// 가장긴 팰린드롬 반환

const s = "babad";
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// 일단 bfs로 ㄱ
// 창의력이 부족했다..
var longestPalindrome = function (s) {
  let maxLen = 0;
  let start = 0;

  const isPalindrome = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      const currLen = r - l + 1;

      if (maxLen < currLen) {
        maxLen = currLen;
        start = l;
      }
      l--;
      r++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    isPalindrome(i, i);
    isPalindrome(i, i + 1);
  }

  return s.slice(start, start + maxLen);
};
// console.log(s.slice(0, 2)); // ba
console.log(longestPalindrome(s));
