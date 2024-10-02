// nums요소가 들어갈 수 있는 모든 하위 집합 만들기. 순서 상관없음

const nums = [1, 2, 3];
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// 1. 재귀함수로 하위 집합 만들고 푸시하는구조.
// 2. 임시 배열을 어케 잘 정화해줘야함.
// var subsets = function (nums) {
//   let result = [];

//   const backTracking = (k, temp) => {
//     result.push([...temp]);

//     for (let i = k; i < nums.length; i++) {
//       temp.push(nums[i]);
//       backTracking(i + 1, temp);
//       temp.pop();
//     }
//   };
//   backTracking(0, []);

//   return result;
// };

// 1. 비트마스터.
// var subsets = function (nums) {
//   let result = [];
//   let set = 1 << nums.length;

//   for (let i = 0; i < set; i++) {
//     let temp = [];
//     for (let j = 0; j < nums.length; j++) {
//       if (i & (1 << j)) {
//         temp.push(nums[j]);
//       }
//     }
//     result.push(temp);
//   }

//   return result;
// };

// 2. bt
var subsets = function (nums) {
  let result = [];
  const bt = (k, temp) => {
    if (k >= nums.length) {
      result.push([...temp]);
      return;
    }
    temp.push(nums[k]);
    bt(k + 1, temp);
    temp.pop();
    bt(k + 1, temp);
  };

  bt(0, []);
  return result;
};

console.log(subsets(nums));
