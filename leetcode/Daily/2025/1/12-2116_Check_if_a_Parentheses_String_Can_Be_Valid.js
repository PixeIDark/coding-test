// ( ) 개수 맞춰라 룩인 인덱스 는 못바꿈

const s = "))()))",
  locked = "010100";
// Output: true
// Explanation: locked[1] == '1' and locked[3] == '1', so we cannot change s[1] or s[3].
//     We change s[0] and s[4] to '(' while leaving s[2] and s[5] unchanged to make s valid.

var canBeValid = function (s, locked) {
  if (s.length % 2 === 1) return false;

  let open = 0;
  let close = 0;
  let chance = 0;
  for (let i = 0; i < s.length; i++) {
    if (locked[i] === "1") {
      if (s[i] === "(") open++;
      else close++;
    } else chance++;

    if (close > open + chance) return false;
  }

  open = 0;
  close = 0;
  chance = 0;
  for (let i = s.length - 1; 0 <= i; i--) {
    if (locked[i] === "1") {
      if (s[i] === "(") open++;
      else close++;
    } else chance++;

    if (open > close + chance) return false;
  }

  return true;
};

console.log(canBeValid(s, locked));
