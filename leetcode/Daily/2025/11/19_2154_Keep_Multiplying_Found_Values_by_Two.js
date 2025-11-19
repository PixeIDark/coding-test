// 찾으면,  original *= 2 하고 계속 또 있는지 탐색해서 최종 값 반환
// set으로 변환 후 has로 탐색
// 3분
var findFinalValue = function (nums, original) {
  const set = new Set(nums);

  while (true) {
    if (set.has(original)) original *= 2;
    else break;
  }

  return original;
};