// x 보다 큰 요소들의 마지막 인덱스 값. 요소들을 모두 and 연산 시 x가 나와야함.

const n = 3,
  x = 1;
// Output: 6
// Explanation: nums can be [4,5,6] and its last element is 6.

// 1 11 101
// 100 101 110
// 7 === 111 같이 비트 수중 최대 값인 경우 다음 요소는 무조건 1111 같이 단위달라지고 최대값임.
// 그게 아니면 가장 작은 자릿 수부터 1로 바뀜 1001 => 1011 => 1101 => 1111
// 단위 달라지는 얘들 1-3-7-15-31  2^n-1인 친구들임
var minEnd = function (n, x) {
  const arr = [x];
  let k = x + 1;

  //
  while (arr.length < n) {
    if ((x & k) === x) {
      arr.push(k);
    }
    k++;
  }

  return arr;
};

console.log(minEnd(n, x));
