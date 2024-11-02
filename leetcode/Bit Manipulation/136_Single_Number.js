// 요소 a를 제외하면 모두 두번 존재함 요소 a 출력

const nums = [4, 1, 2, 1, 2];
// Output: 4

// map에 일단 넣고 있으면 삭제해버림
var singleNumber = function (nums) {
  const map = new Map();

  for (const num of nums) {
    if (map.has(num)) {
      map.delete(num);
      continue;
    }

    map.set(num, num);
  }

  return map.keys().next().value;
};

// var singleNumber = function (nums) {
//   let result = 0;

//   for (const num of nums) {
//     result ^= num;
//   }

//   return result;
// };
console.log(singleNumber(nums));
