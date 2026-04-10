// 좋은 튜플의 최소 거리 반환
// num => [index, index]
// 맵 순회해서 크기 3이상일시 검증
// 20분
var minimumDistance = function (nums) {
  const n = nums.length;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (!map.has(num)) map.set(num, []);
    map.get(num).push(i);
  }

  let result = Infinity;

  for (const [key, arr] of map) {
    if (arr.length < 3) continue;

    for (let i = 0; i < arr.length - 2; i++) {
      let one = Math.abs(arr[i] - arr[i + 1]);
      let two = Math.abs(arr[i + 1] - arr[i + 2]);
      let three = Math.abs(arr[i] - arr[i + 2]);

      result = Math.min(result, one + two + three);
    }
  }

  if (result === Infinity) return -1;

  return result;
};