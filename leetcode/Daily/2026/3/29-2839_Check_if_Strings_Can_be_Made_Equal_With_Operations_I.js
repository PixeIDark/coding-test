// j - i = 2 조건을 만족하는 인덱스는 교환 가능. s1 === s2 가능한지
// s1, s2 길이가 4. 2 - 0, 3 - 1 만 확인하면됨 가짓수 4개
// 12분
var canBeEqual = function (s1, s2) {
  const swap = (arr, a, b) => {
    const newArr = arr.slice();
    [newArr[a], newArr[b]] = [newArr[b], newArr[a]];
    return newArr;
  };
  // JavaScript ASI(자동 세미콜론 삽입)는 ], ), 템플릿 리터럴 등으로 시작하는 줄 앞에서는 세미콜론을 자동 삽입하지 않는다.

  const arr = s1.split("");
  const set = new Set([s1, swap(arr, 0, 2).join(""), swap(arr, 1, 3).join(""), swap(swap(arr, 0, 2), 1, 3).join("")]);

  return set.has(s2);
};