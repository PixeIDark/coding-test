// 최소 경로 탐색 start => end 없으면 0반환

const beginWord = "hit",
  endWord = "cog",
  wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

// dog와 log 둘 다 cog가 될 수 있지만, log는 hit이 될수 있는 경로가 없어서 제외
// for문에서 endWord가 있나 wordList를 탐색
// 없으면 0, end와 최대한 비슷한 녀석들 순으로 탐색 가장 비슷한 녀석이 글자 수 두 개 다르면 도달 불가
// queue에 넣고 꺼내쓰는 while ㄱㄱ
// 해쉬 자료 만들어서 큐에 넣어졌던 얘가 또들어가는 거 방지
var ladderLength = function (beginWord, endWord, wordList) {
  // 1. endWord가 wordList에 없으면 불가능
  if (!wordList.includes(endWord)) return 0;

  const queue = [];
  const vis = new Map();

  // 2. endWord부터 시작하는 역방향 BFS 준비
  queue.push(endWord);
  vis.set(endWord, []);

  // 3. wordList에 beginWord 추가 (없는 경우 대비)
  if (!wordList.includes(beginWord)) {
    wordList.push(beginWord);
  }

  // 4. BFS 탐색
  while (queue.length > 0) {
    const currWord = queue.shift();

    for (const nextWord of wordList) {
      // 이미 방문한 단어는 스킵
      if (vis.has(nextWord)) continue;

      // 한 글자만 다른지 체크
      let diffCount = 0;
      for (let i = 0; i < currWord.length; i++) {
        if (currWord[i] !== nextWord[i]) {
          diffCount++;
          if (diffCount > 1) break; // 최적화: 2개 이상 다르면 즉시 중단
        }
      }

      // 한 글자만 다른 경우 처리
      if (diffCount === 1) {
        queue.push(nextWord);
        vis.get(currWord).push(nextWord);
        vis.set(nextWord, []);
      }
    }
  }

  // 5. beginWord까지 경로가 없으면 불가능
  if (!vis.has(beginWord)) return 0;

  // 6. 최단 경로 찾기 (역방향으로 추적)
  let current = beginWord;
  const path = [beginWord];

  while (current !== endWord) {
    let found = false;
    for (const [word, nextWords] of vis) {
      if (nextWords.includes(current)) {
        path.push(word);
        current = word;
        found = true;
        break;
      }
    }
    if (!found) return 0; // 경로가 끊어진 경우
  }

  return path.length;
};

console.log(ladderLength(beginWord, endWord, wordList));
