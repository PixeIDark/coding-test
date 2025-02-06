// a * b = c * d nums 요소 써서 몇개가 되는지

const nums = [2, 3, 4, 6];
// Output: 16
// Explanation: There are 16 valid tuples:
//     (1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
//     (2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
//     (2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,5,4)
//     (4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)

// abcd 같은 구성은 무조건 8개씩임
// 짝 어케 찾냐..
// a * b = c * d
// ab/cd = 1
// map 에 처넣고 비교 해보자.  (n * n - 1)/ 2 = 개수
// 2개부터 계산가능 1 * 0 / 2 는 성립안됨.
var tupleSameProduct = function (nums) {
  const samePares = {};
  let result = 0;

  // map 이 3배 정도 빠름 n = 1000 기준
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const num = nums[i] * nums[j];
      samePares[num] ??= -1;
      samePares[num]++;

      result += samePares[num];
    }
  }

  return result * 8;
};

console.log(tupleSameProduct(nums));
