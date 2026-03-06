// 8분
var checkOnesSegment = function (s) {
  const arr = s.split("");
  const one = arr.filter(x => x === "1").length;

  if (one === 0) return true;

  const start = arr.indexOf("1");
  const end = arr.lastIndexOf("1");

  return end - start + 1 === one;
};