// 자리수 합이 같은 숫자 끼리의 최대합

const nums = [18, 43, 36, 13, 7];
// Output: 54
// Explanation: The pairs (i, j) that satisfy the conditions are:
//     - (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
//     - (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
// So the maximum sum that we can obtain is 54.

// 걍 자리수 합한 거 map 에 넣고 돌리면 될 거 같은데.. 뭔가 아닌거 같기도 하고..
// 그렇게 할꺼면 sort 로 내림차 순 만들고 map 객체에 최대 한 쌍만 들어가게 할 수 있음
// 키 자리수 합, 밸류 += 요소
// 한 쌍만 계산 할꺼면 어케 제한 하지 최대를? key => [retry, max] 형식 으로 해보자
var maximumSum = function (nums) {
  nums.sort((a, b) => b - a);
  const maxPairs = new Map();
  let result = -1;

  // digits
  for (const num of nums) {
    let digits = 0;

    const str = num.toString();
    for (let i = 0; i < str.length; i++) {
      const n = Number(str[i]);
      digits += n;
    }

    if (!maxPairs.has(digits)) {
      maxPairs.set(digits, [0, num]);
      continue;
    }

    const [retry, value] = maxPairs.get(digits);

    if (!retry) {
      maxPairs.set(digits, [retry + 1, value + num]);
      result = Math.max(result, value + num);
    }
  }
  return result;
};

console.log(maximumSum(nums));
