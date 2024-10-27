// 유효한 디코드 개수 찾기

const s = "11106";
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

// "1", "2" 일경우 오른쪽 한칸 탐색? 탐색안한 경우.
// 마지막 char을 제외한 나머지가 0이 아닌 <= 2면 하나씩 추가
var numDecodings = function (s) {
  if (!s || s[0] === "0") return 0;

  const dp = new Array(s.length + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    const oneWord = parseInt(s[i - 1]);

    if (oneWord > 0) dp[i] += dp[i - 1];

    const twoWord = parseInt(s[i - 2] + s[i - 1]);

    if (9 < twoWord && twoWord < 27) dp[i] += dp[i - 2];
  }

  return dp[s.length];
};

// console.log("fg".charCodeAt(0)); 102
console.log(numDecodings(s));
