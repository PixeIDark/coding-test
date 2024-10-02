// nums의 하위집합들.

const nums = [1, 2, 2];
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// 인덱스로 꺼내면 겹칠일이 없음.
//
var subsetsWithDup = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  const bt = (k, temp) => {
    result.push([...temp]);
    for (let i = k; i < nums.length; i++) {
      if (i > k && nums[i] === nums[i - 1]) continue;
      temp.push(nums[i]);
      bt(i + 1, temp);
      temp.pop();
    }
  };
  bt(0, []);
  return result;
};

console.log(subsetsWithDup(nums));
