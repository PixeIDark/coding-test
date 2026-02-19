// 연속된 "0"의 개수와 "1"의 개수가 같은 부분문자열 개수 반환
// 배열에 개수 저장. 이전것과 다르면 배열 인덱스++
// Math.min(arr[i], arr[i - 1])
// 23분
var countBinarySubstrings = function (s) {
  const arr = [];
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      arr.push(count);
      count = 0;
    }

    count++;
  }

  arr.push(count);
  let result = 0;

  for (let i = 1; i < arr.length; i++) {
    result += Math.min(arr[i], arr[i - 1]);
  }

  return result;
};