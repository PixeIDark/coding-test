// 두 부분 배열의 값이 같은지 여부

const nums = [14, 9, 8, 4, 3, 2];
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// nums의 모든 값을 합하고 이게 홀수면 걍 바로 false임
// 모든 합한 값 / 2 로 변수 만들고 비교하는 식으로
// dp를 nums크기만큼 만들고 - num에 한값을 nums크기 만큼 넣어
//9 [3,3,3,4,5] [3,3,4,5,3]
//  [6,6,6,5,4] [3,3,2,0,1]
// 회전 초밥 전략 가보자!
var canPartition = function (nums) {
  let onePiece = 0;

  for (const num of nums) {
    onePiece += num;
  }

  if (onePiece % 2 === 1) return false;
  onePiece /= 2;

  const dp = new Set([0]);

  for (const num of nums) {
    const arr = Array.from(dp);

    for (const a of arr) {
      const newNum = a + num;
      if (newNum === onePiece) return true;

      if (newNum < onePiece) {
        dp.add(newNum);
      }
    }
  }
  return false;
};

console.log(canPartition(nums));

// nums.reduce((sum,num) => sum + num, 초기 값)
