// 인덱스 반환해라 합이 target되는

const nums = [2, 7, 11, 15];
const target = 9;
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// 1. 오름차순 정렬되어있으니까 좌,우 인덱스를 인덱스를 비교한다.
// 2. 좌우 인덱스를 비교했을 때 target이랑 같으면 return [index,index]
// 3. target보다 좌우 인덱스 합이 작으면 좌 인덱스 값을 올린다.

// [2,7,11,15] 22
//    L    R
// [0, 1]
var twoSum = function (nums, target) {
  let arr = [];
  let n = nums.length;


  while() {

  }
  return arr;
};

console.log(twoSum(nums, target));
