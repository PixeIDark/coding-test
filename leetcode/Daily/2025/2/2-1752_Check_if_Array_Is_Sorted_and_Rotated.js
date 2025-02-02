// 회전 전에 정렬이 였는지 확인

const nums = [1, 3, 2];
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
//     You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].

// 일단 배열에 push.
// 작은 친구 만나면 바로 마지막에서부터 시작해
// 배열의 첫번쨰 요소보다 작거나 같으면 계속 진행
var check = function (nums) {
  const arr = [nums[0]];
  let i = 1;

  while (i < nums.length) {
    if (nums[i] >= nums[i - 1]) arr.push(nums[i]);
    else break;
    i++;
  }

  if (i === nums.length) return true;
  // i인덱스는 정상
  arr.reverse();
  for (let j = nums.length - 1; j >= i; j--) {
    if (arr[arr.length - 1] >= nums[j]) arr.push(nums[j]);
    else return false;
  }
  return true;
};

console.log(check(nums));
