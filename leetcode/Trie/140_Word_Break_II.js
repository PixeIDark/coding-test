// 1. s 를 trie 로 정리
// 2. dfs에서 wordDict를 순회
// 18분
var wordBreak = function (s, wordDict) {
  let root = {};
  let node = root;

  for (const char of s) {
    if (!node[char]) node[char] = {};
    node = node[char];
  }

  node.isEnd = true;
  const result = [];

  const dfs = (str) => {
    if (root.isEnd) result.push(str.trim());

    for (const word of wordDict) {
      let node = root;
      let isWord = true;

      for (const char of word) {
        if (!node[char]) {
          isWord = false;
          break;
        }

        node = node[char];
      }

      if (isWord) {
        const temp = root;
        root = node;
        dfs(str + " " + word);
        root = temp;
      }
    }
  };

  dfs("");

  return result;
};