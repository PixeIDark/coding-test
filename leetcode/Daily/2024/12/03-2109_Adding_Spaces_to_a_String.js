// 띄어쓰기 넣어주기

const s = "icodeinpython",
  spaces = [1, 5, 7, 9];
// Output: "Leetcode Helps Me Learn"
// Explanation:
//     The indices 8, 13, and 15 correspond to the underlined characters in "LeetcodeHelpsMeLearn".
//     We then place spaces before those characters.

var addSpaces = function (s, spaces) {
  let str = "";

  let prev = 0;
  for (const space of spaces) {
    str += s.slice(prev, space);
    str += " ";
    prev = space;
  }

  str += s.slice(prev);

  return str;
};

console.log(addSpaces(s, spaces));
