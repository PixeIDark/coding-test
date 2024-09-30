// nums의 하위집합들.

const nums = [1, 2, 2];
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// 인덱스로 꺼내면 겹칠일이 없음.
//
var subsetsWithDup = function (nums) {
  let result = [];
  let set = 1 << nums.length;

  for (let i = 0; i < set; i++) {
    let temp = [];
    for (let j = 0; j < nums.length; j++) {
      if (i & (1 << j)) {
        temp.push(nums[j]);
      }
    }
    result.push(temp);
  }

  return result;
};

console.log(subsetsWithDup(nums));
