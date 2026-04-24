// return Max(L, R) + _
// 3분
var furthestDistanceFromOrigin = function (moves) {
  let left = 0;
  let right = 0;
  let chance = 0;

  for (const move of moves) {
    if (move === "L") left++;
    else if (move === "R") right++;
    else chance++;
  }

  return Math.max(left, right) - Math.min(left, right) + chance;
};