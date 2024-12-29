// target 만들기 index 는 점점 커져야함

const words = ["acca", "bbbb", "caca"],
  target = "aba";
// Output: 6
// Explanation: There are 6 ways to form target.
// "aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("caca")
// "aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("caca")
// "aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("acca")
// "aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("acca")
// "aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("acca")
// "aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("caca")

// 걍 난이도가 말이 안됨.
var numWays = function (words, target) {};

// const numWays = function(words, target) {
//     // 상수 정의
//     const MOD = 1e9 + 7;
//     const wordLength = words[0].length;
//     const targetLength = target.length;
//
//     // Step 1: 각 위치별 문자 빈도수 계산
//     // freq[i][j]는 i번째 위치에서 j번째 알파벳이 나타나는 횟수
//     const freq = Array.from({ length: wordLength }, () => Array(26).fill(0));
//     for (const word of words) {
//         for (let i = 0; i < wordLength; i++) {
//             freq[i][word[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
//         }
//     }
//
//     // Step 2: DP 배열 초기화
//     // dp[i]는 target의 i길이만큼의 문자열을 만드는 방법의 수
//     const dp = Array(targetLength + 1).fill(0);
//     dp[0] = 1;  // 빈 문자열을 만드는 방법은 1가지
//
//     // Step 3: 동적 프로그래밍
//     for (let j = 0; j < wordLength; j++) {
//         // dp 배열을 뒤에서부터 순회하여 이전 값이 덮어씌워지는 것을 방지
//         for (let i = targetLength - 1; i >= 0; i--) {
//             const charIndex = target[i].charCodeAt(0) - 'a'.charCodeAt(0);
//             dp[i + 1] += dp[i] * freq[j][charIndex];
//             dp[i + 1] %= MOD;
//         }
//     }
//
//     // Step 4: target 전체를 만드는 방법의 수 반환
//     return dp[targetLength];
// };
