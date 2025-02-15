// 처벌 값의 합

const n = 10;
// Output: 182
// Explanation: There are exactly 3 integers i in the range [1, 10] that satisfy the conditions in the statement:
//     - 1 since 1 * 1 = 1
//     - 9 since 9 * 9 = 81 and 81 can be partitioned into 8 and 1 with a sum equal to 8 + 1 == 9.
// - 10 since 10 * 10 = 100 and 100 can be partitioned into 10 and 0 with a sum equal to 10 + 0 == 10.
// Hence, the punishment number of 10 is 1 + 81 + 100 = 182

// 1296 을 배열화 하고, 각 요소 들의 합이 n 보다 크면 바로 종료, 같으면 추가
// 작을 경우, 다음 패턴. 두 자리수 + 한 자리수 조합 으로 이 패턴에서도 합이 n 보다 크면 바로 종료 (모든 조합이 끝났을 때, 조합 하나라도 더 크면 종료임)
// 다음 패턴. 두 자리수 + 두 자리수 조합
var punishmentNumber = function (n) {
  let result = 0;
  let target = -1;

  const bt = (str, idx, sum) => {
    if (idx === str.length) return sum === target;

    for (let i = idx; i < str.length; i++) {
      const num = Number(str.slice(idx, i + 1));

      if (bt(str, i + 1, sum + num)) return true;
    }

    return false;
  };

  for (let i = 1; i <= n; i++) {
    const num = i * i;
    const str = num.toString();
    target = i;

    if (bt(str, 0, 0)) result += num;
  }

  return result;
};
// slice s, s + k + 1
// e = s + k + 1 , s2 = e
// slice s2, s2 + k + 1
console.log(punishmentNumber(n));
