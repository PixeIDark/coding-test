// 6분
var binaryGap = function (n) {
  const bit = n.toString(2);
  let prev = 0;
  let max = 0;

  for (let i = 1; i < bit.length; i++) {
    if (bit[i] === "1") {
      max = Math.max(max, (i - prev));
      prev = i;
    }
  }

  return max;
};