// 약수가 정확히 4개인 요소들의 모든 약수 합 반환
// 35분
var sumFourDivisors = function (nums) {
  const calculator = (num) => {
    const set = new Set();

    for (let i = 1; i * i <= num; i++) {
      if (num % i === 0) {
        set.add(i);
        set.add(num / i);
      }

      if (set.size > 4) return 0;
    }

    if (set.size !== 4) return 0;

    return [...set].reduce((a, b) => a + b, 0);
  };

  return nums.reduce((a, b) => a + calculator(b), 0);
};