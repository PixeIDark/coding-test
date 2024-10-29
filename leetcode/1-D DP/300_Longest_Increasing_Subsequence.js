// < 연속으로 되는 가장 긴 거 길이

Input: nums = [10, 1, 2, 5, 3, 7, 3, 18];
// Output: 5
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// 배열 길이에 맞춰서 최대 length 값을 저장해놓고, 이전 값을 사용하자.
// [4,10,4,3,8,9]
// 3
// 걍 구조가 잘못됨 뜯어고쳐야함
// [스택, num]
// for문으로 끝자리부터 돌면서
// 상대가 안돼잖아 ㅋ

var lengthOfLIS = function (nums) {
  const arr = [nums[0]];

  const search = (num) => {
    let l = 0;
    let r = arr.length - 1;

    while (r > l) {
      const mid = ~~((l + r) / 2);

      if (arr[mid] === num) return mid;

      if (arr[mid] < num) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    return l;
  };

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num > arr[arr.length - 1]) {
      arr.push(num);
    } else {
      // 이진 탐색으로 올바른 자리에 배치하기.
      const index = search(num);
      arr[index] = num;
    }
  }
  return arr.length;
};

// var lengthOfLIS = function (nums) {
//   const dp = new Map();
//   let min = nums[0];
//   dp.set(nums[0], 1);

//   for (let i = 1; i < nums.length; i++) {
//     if (!dp.has(nums[i])) dp.set(nums[i], 1);

//     min = Math.min(min, nums[i]);
//     let j = nums[i] - 1;
//     let max = 0;
//     while (j >= min) {
//       if (dp.has(j)) {
//         max = Math.max(dp.get(j), max);
//       }

//       j--;
//     }
//     dp.set(nums[i], max + 1);
//   }
//   return Math.max(...dp.values());
// };

// var lengthOfLIS = function (nums) {
//   const dp = new Array(nums.length).fill(1);

//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//   }

//   console.log(dp);
//   return Math.max(...dp);
// };

console.log(lengthOfLIS(nums));
