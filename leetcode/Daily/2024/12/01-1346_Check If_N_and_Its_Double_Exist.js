// arr[i] === arr[j] * 2 만족하는 거 존재하는지 판별

const arr = [-2, 0, 10, -19, 4, 6, -8];
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// i !== j 이는 0이라는 함정이 있음.

// *2 객체에 처넣고 있는지 판별 O(n)
// 0은 넣지 않는다. 0이 두개 이상인 경우 무조건 true
var checkIfExist = function (arr) {
  const obj = {};
  let zeros = 0;

  arr.forEach((e) => {
    if (e !== 0) obj[e * 2] = 1;
    else zeros++;
  });

  if (zeros > 1) return true;

  for (const a of arr) {
    if (obj[a]) return true;
  }

  return false;
};

console.log(checkIfExist(arr));
