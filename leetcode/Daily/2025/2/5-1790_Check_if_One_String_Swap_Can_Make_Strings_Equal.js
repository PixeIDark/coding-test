// 한 번의 문자열 교환으로(교환 안해도됨) 두 문자열이 같아질 수 있는지

const s1 = "kelb",
  s2 = "kelb";
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".

// 한 번의 교환으로 같을려면 서로 다른게 2개 까지만 허용됨.
// 다른 거 두개 찾으면 서로 교환해보고 boolean 반환
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;

  const arr = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) arr.push(i);
    if (arr.length > 2) return false;
  }

  if (arr.length === 1) return false;

  // 서로 같으면 되는 거야
  const [a, b] = arr;
  return s1[a] === s2[b] && s1[b] === s2[a];
};

console.log(areAlmostEqual(s1, s2));
