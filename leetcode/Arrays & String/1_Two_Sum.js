// 인덱스 반환해라 합이 target되는

const nums = [3, 3];
const target = 6;
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// 1. 오름차순 정렬되어있으니까 좌,우 인덱스를 인덱스를 비교한다.
// 2. 좌우 인덱스를 비교했을 때 target이랑 같으면 return [index,index]
// 3. target보다 좌우 인덱스 합이 작으면 좌 인덱스 값을 올린다.
// 4. 음수일 경우, 양수로 바꿔서 계산? 아니다 섞일수도 있어
//  [3,2,4] 6
//  L    R
// [2, 4]

// 오름차순으로 정렬되서 오는줄알았는데 아님. sort써서 시간복잡도 높음. 기존 방식 폐기처분.
// 51ms
// var twoSum = function (nums, target) {
//   let a = [];
//   let n = nums.length - 1;
//   let i = 0;
//   let sortNums = nums.toSorted((a, b) => a - b);

//   while (i <= n) {
//     let sum = sortNums[i] + sortNums[n];

//     if (sum < target) i++;
//     if (sum > target) n--;
//     if (sum === target)
//       return [nums.indexOf(sortNums[i]), nums.lastIndexOf(sortNums[n])].sort(
//         (a, b) => a - b
//       );
//   }
// };

// 1. Map에 key: n, value: num[n]을 넣고 target - num[n] 과 같은 value가 있는 key 찾기.
// 2. 개소리임 key value 서로 바꿔야함.
// nums = [-1, -2, -3, -4, -5]; target = -8;
// n = -3, nums[i] = true, nums[n] =
// map -7, 0

// 생각보다 시간복잡도 높아서 폐기처분.
// 55ms
// var twoSum = function (nums, target) {
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let n = target - nums[i];
//     if (map.has(nums[i])) {
//       return [map.get(nums[i]), i];
//     }
//     map.set(n, i);
//   }
// };

// 1. indexOf의 값은 -1 또는 1이상.
// 2. -1일땐 false 1이상일시 true가 나오게 조건문 설정.
// 3. +1 해주면 0되서 false뜸
// 4. target/2 에 해당하는 값이 있으면 로직오류.
// 5. 자기자신은 안되게 해야함
// [3,3] 6

// 회심의 역작.
// 존나 느림
var twoSum = function (nums, target) {
  // let set = new Set([...nums])

  for (let i = 0; i < nums.length; i++) {
    let n = target - nums[i];

    nums[i] = 0;
    if (nums.indexOf(n) + 1) return [i, nums.lastIndexOf(n)];
  }
};
console.log(twoSum(nums, target));

// Map이 sort보다 시간복잡도가 높다..
