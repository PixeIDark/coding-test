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
  const queue = [];
  let vis = new Map();
  wordList.push(beginWord);
  for (const word of wordList) {
    if (word === endWord) {
      queue.push(word);
      vis.set(word, [word]);
      break;
    }
  }

  if (queue.length === 0) return 0;

  while (queue.length > 0) {
    const currWord = queue.shift();
    // for 순회하면서 단어 하나 차이나는 얘들 queue에 삽입 하나 차이없으면 즉시 0리턴후 함수 종료
    // 길이가 다른 경우있으면 얼리 리턴

    for (const nextWord of wordList) {
      if (vis.has(nextWord)) continue;
      let sameStack = 0;
      for (let i = 0; i < currWord.length; i++) {
        if (currWord[i] === nextWord[i]) {
          sameStack++;
        }
      }

      if (sameStack === currWord.length - 1) {
        queue.push(nextWord);
        vis.get(currWord).push(nextWord);
        vis.set(nextWord, [nextWord]);
      }
    }
  }
  return vis;
};

console.log(ladderLength(beginWord, endWord, wordList));
