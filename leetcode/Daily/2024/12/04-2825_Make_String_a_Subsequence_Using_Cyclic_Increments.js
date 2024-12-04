// str1을 한 번씩 증가시켜서 str2가 하위 집합이 되는지 여부.

const str1 = "abc",
  str2 = "ad";
// Output: true
// Explanation: Select indices 0 and 1 in str1.
//     Increment str1[0] to become 'a'.
//     Increment str1[1] to become 'd'.
//     Hence, str1 becomes "ad" and str2 is now a subsequence. Therefore, true is returned.

var canMakeSubsequence = function (str1, str2) {
  if (str1.length < str2.length) return false;

  // 걍 charcode해서 str1 증가 시켜서 비교하면됨. 문제는 순환 z => a 증가시될수있음.
  // i % 26으로 대응.
  // str2[0], str2[final]이 맞는지 대조 후 비교

  const converter = (s1, s2) => {
    if (!s1 || !s2) return false;

    return (
      (s1.charCodeAt() + 1) % 26 === s2.charCodeAt() % 26 ||
      s1.charCodeAt() % 26 === s2.charCodeAt() % 26
    );
  };

  const start = 0;
  const length = str2.length - 1;
  let k = 0;

  for (let i = 0; i < str1.length; i++) {
    while (
      converter(str1[i], str2[start]) &&
      converter(str1[i + length], str2[length])
    ) {
      if (k === length + 1) return true;
      if (!converter(str1[i + k], str2[start + k])) break;
      k++;
    }
  }

  return false;
};

console.log(canMakeSubsequence(str1, str2));
