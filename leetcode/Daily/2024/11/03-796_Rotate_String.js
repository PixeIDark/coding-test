// s 회전시켜서 goal 되는지 여부

const s = "abcde",
  goal = "abced";
//     "eabcd"
// Output: true

// 무식하게 회전 후 같은지 여부 계속 판별?
// 무식한 방법이라 망설였는데... 이게 최적의 방법이네 ㅋㅋ
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      let rotate = j + i;
      rotate >= s.length ? (rotate -= s.length) : rotate;
      if (goal[rotate] !== s[j]) break;

      if (j === s.length - 1) return true;
    }
  }

  return false;
};

console.log(rotateString(s, goal));
