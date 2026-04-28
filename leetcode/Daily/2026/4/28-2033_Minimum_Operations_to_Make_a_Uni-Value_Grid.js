// 셀을 모두 같게할수 있는지 유효성부터
// 각 셀의 차이가 x의 배수여야 가능함 하나라도 배수아니면 -1
// [6, 10, 20, 7] x = 2
// [9, 10, 30, 5]
// 1. 모든 셀을 1차원 배열 정렬
// 2. 중앙값으로 변환
// 15분
var minOperations = function (grid, x) {
  const nums = grid.flat().sort((a, b) => a - b);
  const n = nums.length;

  const getCost = (midIndex) => {
    const midNumber = nums[midIndex];
    let result = 0;

    for (const num of nums) {
      const diff = Math.abs(midNumber - num);
      const count = diff / x;

      if (!Number.isInteger(count)) return -1;
      result += count;
    }

    return result;
  };

  return getCost(Math.floor(n / 2));
};