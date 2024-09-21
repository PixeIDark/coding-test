// s1 순서 어떻든간에 s2에 넣으면 존재하는지 여부

const s1 = "adc";
const s2 = "ghdasdc";
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

//
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let a = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    a[s1.charCodeAt(i) - 97]++;
    a[s2.charCodeAt(i) - 97]--;
  }

  if (a.every((x) => x === 0)) return true;

  for (let i = s1.length; i < s2.length; i++) {
    a[s2.charCodeAt(i - s1.length) - 97]++;
    a[s2.charCodeAt(i) - 97]--;

    if (a.every((x) => x === 0)) return true;
  }
  return false;
};

console.log(checkInclusion(s1, s2));
