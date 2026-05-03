// 4분
var rotateString = function (s, goal) {
  const n = s.length;

  for (let i = 0; i < n; i++) {
    if (s === goal) return true;
    s = s.substring(1, n) + s[0];
  }

  return false;
};