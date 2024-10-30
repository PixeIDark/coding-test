// s1, s2 교차해서 s3만들수 있는지

const s1 = "aabcc",
  s2 = "dbbca",
  s3 = "aadbbcbcac";
// Output: true
// Explanation: One way to obtain s3 is:
// Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
// Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
// Since s3 can be obtained by interleaving s1 and s2, we return true.

var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  let a = 0;
  let b = 0;

  for (const char of s3) {
    console.log(char, a, b);
    if (char === s1[a]) {
      a++;
    } else if (char === s2[b]) {
      b++;
    } else return false;
  }

  return true;
};

console.log(isInterleave(s1, s2, s3));
