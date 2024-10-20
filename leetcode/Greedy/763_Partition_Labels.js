// 격리시키고 length arr에 담아서 반환하기

const s = "ababcbacadefegdehijhklij";
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

// 조건 1. 최대한 잘게 나누는게 목표
// 조건 2. 다른 그룹과 문자열이 겹치면 안됨.
// 가장 잘게 나눌려면 겹치는게 많은 놈들은 한곳에 격리시키고 나머지 얘들을 나눠야함.
// 격리를 기본으로 하고, 자기 자신을 만나면 합치는 식으로 해보자.
var partitionLabels = function (s) {
  let lastIndex = {};

  for (let i = 0; i < s.length; i++) {
    lastIndex[s[i]] = i;
  }

  let result = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    let n = 0;
    end = Math.max(end, lastIndex[s[i]]);

    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
};

console.log(partitionLabels(s));
