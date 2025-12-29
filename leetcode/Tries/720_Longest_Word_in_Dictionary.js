// tries 를 가장 깊게 들어갈수 있는 단어 반환
// 사전순으로 words 정렬
// 글자 수가 1개 인 word만 tries에 추가
// 글자 수가 2개 이상인 word순회중 첫글자가 존재하지않으면 break
// 글자 수가 3개 이상인 word순회중 세번째 글자를 제외하고 존재하지않으면 break
// tries 탐색 중 일치하는 단어를 모두 배열에 넣고 정렬 후 [0]반환
// 29분
var longestWord = function (words) {
  words.sort();
  let root = {};

  for (const word of words) {
    let node = root;
    let k = word.length - 1;
    let isWord = true;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node[char]) {
        if (k === i) node[char] = {};
        else {
          isWord = false;
          break;
        }
      }

      node = node[char];
    }

    if (isWord) node.word = word;
  }

  let result = "";

  for (const word of words) {
    let node = root;

    for (const char of word) {
      if (!node[char]) break;
      node = node[char];
    }

    if (node.word === word && result.length < word.length) result = word;
  }

  return result;
};