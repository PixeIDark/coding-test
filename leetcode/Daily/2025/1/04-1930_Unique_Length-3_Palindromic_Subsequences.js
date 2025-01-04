// 길이 3 펜린드롬 몇 개인지 중복 x

const s = "aabca";
// Output: 3
// Explanation: The 3 palindromic subsequences of length 3 are:
// - "aba" (subsequence of "aabca")
// - "aaa" (subsequence of "aabca")
// - "aca" (subsequence of "aabca")

// 첫번째 char 랑 마지막 char 같은지 여부 검사하고
// 걍 set 에 처박아보자
// 첫번째 char 이 될려면 같은 얘가 존재는 해야함.
// 객체에 개수를 저장해보자.
// 마지막 char 은 str 끝에서부터 찾고, 이 작업이 끝난후부터는 해당 char 은 탐색하지않는다.
var countPalindromicSubsequence = function (s) {
  const dp = Array(26).fill(0);
  const wife = Array(26).fill(-1);
  // 자기랑 같은 얘 찾으면 저장하는거야 걔의 s 인덱스를
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const index = char.charCodeAt(0) - 97;
    if (dp[index] > 0) wife[index] = i;
    dp[index]++;
  }

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const index = char.charCodeAt(0) - 97;

    if (wife[index] > i + 1) {
      let set = new Set();
      for (let j = i + 1; j < wife[index]; j++) {
        set.add(s[j]);
      }
      wife[index] = -1;
      result += set.size;
    }
  }

  return result;
};

console.log(countPalindromicSubsequence(s));
// console.log("a".charCodeAt(0)); // 97
// console.log("z".charCodeAt()); // 122
