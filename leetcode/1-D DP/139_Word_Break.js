// 단어 나눠지는지 검증

const s = "cats",
  wordDict = ["cats", "dog", "sand", "and", "cat"];
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// 일단 bfs로
// 시간초과
// stack에 넣을 때 들어왔었던 단어가 들어오는 문제를 해결해야해
// wordDict의 단어중 하나를 map에 대입해서 결과값이 저장된 것과 일치하면 break
var wordBreak = function (s, wordDict) {
  const stack = [0];
  const dict = new Set(wordDict);
  const vis = new Set();
  const max = Math.max(...wordDict.map((i) => i.length));

  while (stack.length > 0) {
    const start = stack.pop();

    if (vis.has(start)) continue;
    vis.add(start);

    let word = "";
    for (let length = 0; length < max && length < s.length; length++) {
      word += s[start + length];

      if (dict.has(word)) {
        if (start + length + 1 === s.length) return true;

        stack.push(start + length + 1);
      }
    }
  }

  return false;
};

// var wordBreak = function (s, wordDict) {
//   const word = new Set(wordDict);
//   const dp = new Array(s.length + 1).fill(false);

//   dp[0] = true;

//   for (let i = 1; i <= s.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (dp[j] && word.has(s.slice(j, i))) {
//         dp[i] = true;
//         break;
//       }
//     }
//   }

//   return dp[s.length];
// };

console.log(wordBreak(s, wordDict));

// const obj = {};
// obj["fd"] = "gdgd";
// console.log(obj.fd); gdgd
