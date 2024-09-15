// 자기 자신 제외하고 전부 곱한값 순서대로 떠야함

const nums = [1, 2, 3, 4];

// for문안에서 i제외한놈 map으로 곱한값 나오게하면됨.
// 시간복잡도 줄여야해
// var productExceptSelf = function (nums) {
//   let a = [];
//   for (let i = 0; i < nums.length; i++) {
//     let k = 1;
//     nums.map((item, index) => {
//       if (index !== i) {
//         k *= item;
//       }
//     });
//     a.push(k);
//   }
//   return a;
// };

var productExceptSelf = function (nums) {
  let n = nums.length;
  let a = new Array(n).fill(1);
  let prevIndex = 1;
  let nextIndex = 1;

  for (let i = 0; i < n; i++) {
    a[i] *= prevIndex;
    prevIndex *= nums[i];

    a[n - i - 1] *= nextIndex;
    nextIndex *= nums[n - i - 1];
  }
  return a;
};

// new Array알게됨 길이가 n인 빈 배열만들고 fill()을 채워넣음

console.log(productExceptSelf(nums));
