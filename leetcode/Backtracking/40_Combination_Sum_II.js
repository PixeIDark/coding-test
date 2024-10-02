// 합이 8되는 거 전부 찾아라. 중복된 거는 포함x, 조합에서 한 번씩만 각 숫자는 사용 가능.

const candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8;
// Output: [
//   [1, 1, 6],
//   [1, 2, 5],
//   [1, 7],
//   [2, 6],
// ];

// 조건문만 잘 써주면 쉽다.
// 결과 값 순서도 신경써야되서 불합격.
// var combinationSum2 = function (candidates, target) {
//   let result = [];
//   const bt = (k, temp, target) => {
//     if (k >= candidates.length || target < 0) return;
//     if (target === 0) {
//       result.push([...temp]);
//       return;
//     }

//     temp.push(candidates[k]);
//     bt(k + 1, temp, target - candidates[k]);
//     temp.pop();
//     bt(k + 1, temp, target);
//   };
//   bt(0, [], target);

//   return result;
// };

var combinationSum2 = function (candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);
  const bt = (k, temp, target) => {
    if (target === 0) {
      result.push([...temp]);
      return;
    }
    for (let i = k; i < candidates.length; i++) {
      if (i > k && candidates[i] === candidates[i - 1]) continue;
      if (target < candidates[i] || target < 0) break;
      temp.push(candidates[i]);
      bt(i + 1, temp, target - candidates[i]);
      temp.pop();
    }
  };
  bt(0, [], target);
  return result;
};

console.log(combinationSum2(candidates, target));
