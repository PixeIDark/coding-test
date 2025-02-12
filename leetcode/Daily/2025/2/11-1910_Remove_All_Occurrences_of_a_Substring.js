// part 인거 있으면 계속 지워라

const s = "axxxxyyyyb",
  part = "xy";
// Output: "dab"
// Explanation: The following operations are done:
// - s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
// - s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
// - s = "dababc", remove "abc" starting at index 3, so s = "dab".
// Now s has no occurrences of "abc".

// 스택 이겠지
// abc 아닌 얘들은 스택에 넣어라
var removeOccurrences = function (s, part) {
  // 무고한 자로 이루어진 스택을 반환해주는 함수를 만들어보자

  const n = part.length;

  while (true) {
    let idx = s.indexOf(part);
    if (idx === -1) return s;
    s = s.substring(0, idx) + s.substring(idx + n);
  }
};

console.log(removeOccurrences(s, part));
console.log(s.substring(0));
