// 접두사면 false
// 1. 길이순으로 정렬
// 2. 중첩 반복문에서 검증
// 시간모자름 trie 문제 같음
// 1. trie 만들다가 발견 시 즉시 리턴
// 12분
function solution(phone_book) {
  phone_book.sort((a, b) => a.length - b.length);

  let trie = {};

  for (const str of phone_book) {
    let node = trie;

    for (const char of str) {
      if (node.isEnd) return false;

      if (!node[char]) node[char] = {};
      node = node[char];
    }

    node.isEnd = true;
  }

  return true;
}