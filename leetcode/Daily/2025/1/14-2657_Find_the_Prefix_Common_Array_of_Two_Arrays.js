// 인덱스 i 까지 공통 된것 개수 반환

const A = [2, 3, 1],
  B = [3, 1, 2];
// Output: [0,2,3,4]
// Explanation: At i = 0: no number is common, so C[0] = 0.
// At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
// At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
// At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.

// set에 처넣고 비교
var findThePrefixCommonArray = function (A, B) {
  const set = new Set();
  const arr = [];

  const result = [];

  for (let i = 0; i < A.length; i++) {
    arr.push(A[i], B[i]);
    set.add(A[i]);
    set.add(B[i]);

    result.push(arr.length - set.size);
  }

  return result;
};

console.log(findThePrefixCommonArray(A, B));
