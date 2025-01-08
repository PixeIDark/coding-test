// 요소 누적합 인 요소 쌍 몇 개인지

const words = ["a", "aba", "ababa", "aa"];
// Output: 4
// Explanation: In this example, the counted index pairs are:
//     i = 0 and j = 1 because isPrefixAndSuffix("a", "aba") is true.
//     i = 0 and j = 2 because isPrefixAndSuffix("a", "ababa") is true.
//     i = 0 and j = 3 because isPrefixAndSuffix("a", "aa") is true.
//     i = 1 and j = 2 because isPrefixAndSuffix("aba", "ababa") is true.
//     Therefore, the answer is 4.

// 어제 인지한 include 갈겨 보자.

var countPrefixSuffixPairs = function (words) {
  let result = 0;
  for (let i = 0; i < words.length - 1; i++) {
    const guidingWord = words[i];

    for (let j = i + 1; j < words.length; j++) {
      const luringWord = words[j];

      if (guidingWord === luringWord) {
        result++;
        continue;
      }
      if (guidingWord.length > luringWord.length) continue;

      if (
        luringWord.substring(0, guidingWord.length) === guidingWord &&
        luringWord.substring(luringWord.length - guidingWord.length) ===
          guidingWord
      )
        result++;
    }
  }

  return result;
};

// var countPrefixSuffixPairs = function (words) {
//   const check = (guidingWord, luringWord, luringIndex) => {
//     let guidingIndex = 1;
//     luringIndex++;
//
//     while (guidingIndex < guidingWord.length) {
//       if (guidingWord[guidingIndex] !== luringWord[luringIndex]) return false;
//       guidingIndex++;
//       luringIndex++;
//     }
//
//     return true;
//   };
//
//   let result = 0;
//   for (let i = 0; i < words.length - 1; i++) {
//     const guidingWord = words[i];
//
//     for (let j = i + 1; j < words.length; j++) {
//       const luringWord = words[j];
//
//       if (guidingWord === luringWord) {
//         result++;
//         continue;
//       }
//       if (guidingWord.length > luringWord.length) continue;
//
//       let count = 0;
//       for (let k = 0; k < luringWord.length; k++) {
//         if (guidingWord[0] !== luringWord[k]) continue;
//         if (check(guidingWord, luringWord, k)) count++;
//       }
//
//       if (count >= 2) result++;
//     }
//   }
//
//   return result;
// };

console.log(countPrefixSuffixPairs(words));
