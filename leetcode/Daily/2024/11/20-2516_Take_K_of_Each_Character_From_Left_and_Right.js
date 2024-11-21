// k 개의 abc를 얻는 최소 분, 안되면 -1 반환

const s = "abc",
  k = 1;
// Output: 8
// Explanation:
//     Take three characters from the left of s. You now have two 'a' characters, and one 'b' character.
//     Take five characters from the right of s. You now have four 'a' characters, two 'b' characters, and two 'c' characters.
//     A total of 3 + 5 = 8 minutes is needed.
//     It can be proven that 8 is the minimum number of minutes needed.

// 3가지의 경우를 비교, 왼쪽 원툴, 오른쪽 원툴, 왼쪽 + 오른쪽
var takeCharacters = function (s, k) {
  let total = {
    a: 0,
    b: 0,
    c: 0,
  };

  for (const char of s) {
    total[char]++;
  }

  if (total.a < k || total.b < k || total.c < k) return -1;

  let count = {
    a: 0,
    b: 0,
    c: 0,
  };

  let result = s.length;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    count[s[right]]++;

    while (
      left <= right &&
      (total.a - k < count.a || total.b - k < count.b || total.c - k < count.c)
    ) {
      count[s[left]]--;
      left++;
    }

    result = Math.min(result, s.length - (right - left + 1));
    right++;
  }

  return result;
};

console.log(takeCharacters(s, k));
