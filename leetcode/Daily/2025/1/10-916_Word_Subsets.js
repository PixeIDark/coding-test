// word2가 모두 포함된 word 출력

const words1 = ["amazon", "apple", "facebook", "google", "leetcode"],
  words2 = ["e", "oo"];
// Output: ["facebook","google","leetcode"]

// word2 한 글자로 나눠 버리고 set 에 처 넣으면됨
var wordSubsets = function (words1, words2) {
  const dp = Array.from({ length: words2.length }, () => Array(26).fill(0));

  for (let i = 0; i < words2.length; ++i) {
    for (const word2 of words2[i]) {
      const charNumber = word2.charCodeAt(0) - 97;
      dp[i][charNumber]++;
    }
  }

  const result = [];
  for (const word1 of words1) {
    const guidingWord = word1.split("");
    let isPass = true;

    if (isPass) result.push(word1);
  }

  return result;
};

console.log(wordSubsets(words1, words2));
