// bits[i] | (bits[i] + 1) === nums[i], 최소 값들로 비트 배열 반환
// 조건 만족이안되는 경우 -1, nums[i]는 소수
// a | b = c, c 는 무조건 a와 b보다 같거나 크다
// a = b ^ c
// 브루트포스로하면 0부터 해볼 수 있음
// 20분
var minBitwiseArray = function (nums) {
  const n = nums.length;
  const bits = Array(n).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <= nums[i]; j++) {
      if ((j | (j + 1)) === nums[i]) {
        bits[i] = j;
        break;
      }
    }
  }

  return bits;
};