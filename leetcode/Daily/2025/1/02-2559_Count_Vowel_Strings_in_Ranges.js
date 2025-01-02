// 쿼리 범위에 모음에서 시작 모음 끝인 str 몇 개 인지 출력

const words = ["a", "e", "i"],
  queries = [
    [0, 2],
    [0, 1],
    [2, 2],
  ];
// Output: [2,3,0]
// Explanation: The strings starting and ending with a vowel are "aba", "ece", "aa" and "e".
//     The answer to the query [0,2] is 2 (strings "aba" and "ece").
// to query [1,4] is 3 (strings "ece", "aa", "e").
// to query [1,1] is 0.
// We return [2,3,0].

var vowelStrings = function (words, queries) {
  const set = new Set(["a", "e", "i", "o", "u"]);
  const dp = Array(words.length + 1).fill(0);

  for (let i = 1; i <= words.length; i++) {
    const word = words[i - 1];
    const start = word[0];
    const end = word[word.length - 1];

    dp[i] = dp[i - 1];
    if (set.has(start) && set.has(end)) dp[i]++;
  }

  const result = [];
  for (const [start, end] of queries) {
    const count = dp[end + 1] - dp[start];
    result.push(count);
  }

  return result;
};

console.log(vowelStrings(words, queries));
