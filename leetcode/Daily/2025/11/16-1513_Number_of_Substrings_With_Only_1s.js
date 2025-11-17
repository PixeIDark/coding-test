// "1"로만 이루어진 연속하는 부분집합의 개수 모듈로 반환
// "1" 만날때마다 +1 씩증가하는 k, result += k. "0"만나면 초기화
// 5분
var numSub = function (s) {
  const mod = 1e9 + 7;
  let k = 0;
  let result = 0;

  for (const char of s) {
    if (char === "1") k++;
    else k = 0;

    result = (result + k) % mod;
  }

  return result;
};