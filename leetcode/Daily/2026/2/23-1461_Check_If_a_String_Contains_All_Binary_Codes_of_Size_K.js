// k = 1 => 2
// k = 2 => 4
// k = 3 => 8
// k = 4 => 16
// 2^k
// s를 k 크키로 윈도우 후 set에 넣고, set.size가 2^k 인지 판별
// 9분
var hasAllCodes = function (s, k) {
  const n = s.length;
  const set = new Set;

  for (let i = 0; i <= n - k; i++) {
    const bit = s.substring(i, i + k);
    set.add(bit);
  }

  return Math.pow(2, k) === set.size;
};