// t로 최소 윈도우 만들고 반환

const s = "ADOBECODEBANC",
  t = "ABC";
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// map객체 두개 준비하고 일치하면 정수 이용해서 size랑 비교 성공시 올바른 str임
// 슬라이딩 기법 적극 활용
var minWindow = function (s, t) {
  if (s.length < t.length) return "";
  const need = new Map();

  for (const char of t) {
    need.set(char, need.get(char) + 1 || 1);
  }

  let l = 0;
  let r = 0;
  let valid = 0;
  let start = 0;
  let minlength = Infinity;
  const window = new Map();

  for (let i = 0; i < s.length; i++) {
    r = i;

    if (need.has(s[i])) {
      window.set(s[i], window.get(s[i]) + 1 || 1);
      if (need.get(s[i]) === window.get(s[i])) valid++;
    }

    while (valid === need.size) {
      if (minlength > r - l + 1) {
        minlength = r - l + 1;
        start = l;
      }

      const char = s[l];

      l++;

      if (need.has(char)) {
        if (window.get(char) === need.get(char)) valid--;
        window.set(char, window.get(char) - 1);
      }
    }
  }
  return minlength === Infinity ? "" : s.slice(start, start + minlength);
};

console.log(minWindow(s, t));
