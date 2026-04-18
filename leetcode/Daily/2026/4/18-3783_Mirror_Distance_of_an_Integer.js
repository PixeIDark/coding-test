// 배열, 문자열 안만들고 할수있나?
// 4분
var mirrorDistance = function (n) {
  const reverse = String(n).split("").reverse();
  return Math.abs(Number(reverse.join("")) - n);
};