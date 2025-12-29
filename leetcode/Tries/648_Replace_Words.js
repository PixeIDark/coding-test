// sentence => trie
// dictionary 2차 순회로 탐색
// 아, 반대로했다. 반대로해야함
// 22분
var replaceWords = function (dictionary, sentence) {
  let root = {};

  for (const word of dictionary) {
    let node = root;

    for (const char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }

    node.word = word;
  }

  const words = sentence.split(" ");
  let result = [];

  for (const word of words) {
    let node = root;
    let addedWord = word;

    for (const char of word) {
      if (!node[char]) break;

      node = node[char];
      if (node.word) {
        addedWord = node.word;
        break;
      }
    }

    result.push(addedWord);
  }

  return result.join(" ");
};