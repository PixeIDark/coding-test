// 공이 든 가방중 가장 공이 많이든 가방의 공의 개수 출력. 공의 개수는 적게해야함 되도록

const nums = [2, 4, 8, 2],
  maxOperations = 4;
// Output: 2
// Explanation:
//     - Divide the bag with 8 balls into two bags of sizes 4 and 4. [2,4,8,2] -> [2,4,4,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,4,4,4,2] -> [2,2,2,4,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,4,4,2] -> [2,2,2,2,2,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,2,2,4,2] -> [2,2,2,2,2,2,2,2].
//     The bag with the most number of balls has 2 balls, so your penalty is 2, and you should return 2.

var minimumSize = function (nums, maxOperations) {
  let left = 1;
  let right = Math.max(...nums);

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    let operations = 0;

    for (const num of nums) {
      operations += Math.floor((num - 1) / mid);
    }

    if (operations <= maxOperations) right = mid;
    else left = mid + 1;
  }

  return left;
};

console.log(minimumSize(nums, maxOperations));
