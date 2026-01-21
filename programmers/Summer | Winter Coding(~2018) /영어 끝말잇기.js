// return [탈락한 사람, 몇번째 라운드]
// 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
// 이전에 등장했던 단어는 사용할 수 없습니다.
// 한 글자인 단어는 인정되지 않습니다.
// 15분
function solution(n, words) {
  const vis = new Set();
  let lastChar = words[0][0];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const firstChar = word[0];
    if (vis.has(word) | word.length < 2 | lastChar !== firstChar) {
      console.log(vis.has(word), word.length < 2, lastChar !== firstChar);
      return [i % n + 1, Math.floor(i / n) + 1];
    }

    vis.add(word);
    lastChar = word.at(-1);
  }

  return [0, 0];
}