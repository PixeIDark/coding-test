// 배열에 포함되지않은 길이가 nums.length 인 이진문자열 찾기
// 1. bit => num, arr => set
// 2. 0부터 2 ^ nums.length 반복문 진행하면서 !has 찾기
// 3. 해당 숫자를 bit로 바꾸고 부족한 길이만큼 >> 해주기
// 10분
var findDifferentBinaryString = function (nums) {
  const n = nums.length;
  const arr = nums.map(x => parseInt(x, 2));
  const set = new Set(arr);
  let num = -1;

  for (let i = 0; i < Math.pow(2, n); i++) {
    if (!set.has(i)) {
      num = i;
      break;
    }
  }

  num = num.toString(2);
  const diff = n - num.length;

  return "0".repeat(diff) + num;
};