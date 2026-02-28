// 5분
var concatenatedBinary = function (n) {
  const mod = 1e9 + 7;
  let result = "";

  for (let i = 1; i <= n; i++) {
    const bit = i.toString(2);
    result += bit;
    result = (parseInt(result, 2) % mod).toString(2);
  }

  return parseInt(result, 2) % mod;
};