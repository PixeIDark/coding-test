// 배열에서 펠린드롬 몇개 나오는지 개수 출력

const s = "aaa";
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// 시발
var countSubstrings = function (s) {
  let result = 0;

  const isPalindrome = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      result++;
      l--;
      r++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    isPalindrome(i, i);
    isPalindrome(i, i + 1);
  }

  return result;
};

console.log(countSubstrings(s));
