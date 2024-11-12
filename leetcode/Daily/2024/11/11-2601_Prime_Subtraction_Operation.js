// 오름차순으로 정렬하자 nums[i]의 소수 p로 nums[i] - p 할 수 있다.

const nums = [1, 1, 50, 12, 28, 11, 65, 32];
// gfdsagvdsalvdsad = [1, 3,  6,  8, 11 ,13, 15, 18, 19, 21]
//                     31, 5, 91, 19, 19, 65, 0, 43, 41, 67
// Output: true
// Explanation: In the first operation: Pick i = 0 and p = 3, and then subtract 3 from nums[0], so that nums becomes [1,9,6,10].
//     In the second operation: i = 1, p = 7, subtract 7 from nums[1], so nums becomes equal to [1,2,6,10].
//     After the second operation, nums is sorted in strictly increasing order, so the answer is true.

// n - p 를 했을 때 i - 1의 값 보다는 큰 소수로 빼야함
// 즉 n - (i -1) > p 여야함. ((i - 1) 보다 n 이 무조건 커야하므로 초과 부등호 '>')
// 정렬이 올바르게 되어있어도 무조건 소수로 n 을 빼는게 좋다.
// 소수 구하는 함수 이중 포문 안 쓰고 만드는 법 몰라서 꼼수씀.
var primeSubOperation = function (nums) {
  // 우선 첫 요소 소수로 최소 값 만들기.
  // 소수는 자기자신과 1로 나누었을 시에만 나머지가 0인 값 임 = 2또는 3으로 나누었을 때 나머지가 나옴
  // n보다 작은 소수 구하는 함수를 만들자
  const lonelyCalculator = (num) => {
    if (num === 1) return 0;
    for (let i = num - 1; i > 0; i--) {
      if (i === 1) return 0;
      if (i / 2 === 1) return i;
      if (i / 3 === 1) return i;
      if (i / 5 === 1) return i;
      if (i / 7 === 1) return i;
      if (i / 11 === 1) return i;
      if (
        i % 2 !== 0 &&
        i % 3 !== 0 &&
        i % 5 !== 0 &&
        i % 11 !== 0 &&
        i % 7 !== 0
      )
        return i;
    }
  };
  nums[0] -= lonelyCalculator(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) return false;
    let p = nums[i];
    while (nums[i] - lonelyCalculator(p) <= nums[i - 1]) {
      p--;
    }

    nums[i] -= lonelyCalculator(p);
  }

  return nums;
};

console.log(primeSubOperation(nums));
// 이상한 문제 공식적인 소수 구하는 알고리즘 쓰면 타임 리밋뜸.
