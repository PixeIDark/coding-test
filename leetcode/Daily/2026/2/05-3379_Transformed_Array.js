// 요소 값에 따라 왼쪽 오른쪽으로 인덱스 이동 후 해당 요소 값을 새 배열에 할당하기
// 34분
var constructTransformedArray = function (nums) {
  const n = nums.length;
  const result = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let newIndex = (i + nums[i]) % n;
    if (newIndex < 0) newIndex += n;

    const target = nums[newIndex];
    result[i] = target;
  }

  return result;
};