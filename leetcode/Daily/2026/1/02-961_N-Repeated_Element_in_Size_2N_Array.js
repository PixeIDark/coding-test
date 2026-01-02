// 2 * n 크기로 배열을 변경했을 시, n번 반복되는 요소 찾기
// 해당 요소는 무조건 존재함
// nums.length / 2 이상인 요소 찾아서 반환하면됨
// 4분
var repeatedNTimes = function (nums) {
  const target = nums.length / 2;
  const freq = new Map();

  for (const num of nums) {
    let value = (freq.get(num) ?? 0) + 1;
    if (value >= target) return num;

    freq.set(num, value);
  }
};