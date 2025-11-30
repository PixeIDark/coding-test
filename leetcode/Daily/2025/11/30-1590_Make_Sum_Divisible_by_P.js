// p로 나누어 떨어지게 하기위해 제거해야하는 최소한의 요소개수 반환, 불가능하면 -1
// nums 내림차로 정렬
// TODO: 벽
var minSubarray = function (nums, p) {
  const total = nums.reduce((a, b) => a + b, 0);
  const target = total % p;

  // k = target - num 을 키로 저장. 그 후 k에 해당하는 num이 나오면 k의 밸류값 + 1 해서 최소치 저장

  const map = new Map();
  let min = nums.length;

  for (const num of nums) {
    if (map.has(num)) {
      min = Math.min(min, map.get(num));
    }
    const key = target - num;
    map.set(key, (map.get(key) ?? 0) + 1);
  }

  console.log(map, min);

  return min;
};