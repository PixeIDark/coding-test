// 문장중에 해당하는 단어 찾으면 n반환 없으면 -1 반환

const p = 1,
  sentence = "this problem is an easy problem",
  searchWord = "pro";
// Output: 2
// Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.

// sentence 배열화 후
// 1. searchWord의 첫번째 char 기준으로 일치하는 것을 찾으면 쭉 탐색 진행
// 2. searchWord의 마지막 char와 비교 하는게 더 좋을 수 있음
var isPrefixOfWord = function (sentence, searchWord) {
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length < searchWord.length || word[0] !== searchWord[0]) continue;

    let count = 0;
    while (count < searchWord.length && word[count] === searchWord[count]) {
      count++;
    }

    if (count === searchWord.length) return i + 1;
  }

  return -1;
};

console.log(isPrefixOfWord(sentence, searchWord));
