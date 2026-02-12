// 해시 맵에 빈도 수 기록
// 기록될 때마다 최고 빈도수와 비교
// 해시 맵 size - 1만큼 현재 빈도수 === 최고 빈도수 일 시, 균형 문자열
// 중첩 반복문 순회
// 14분
var longestBalanced = function (s) {
  const n = s.length;
  let maxLength = 0;

  for (let i = 0; i < n; i++) {
    const freqs = new Map();
    let maxFreq = 0;
    let count = 0;

    for (let j = i; j < n; j++) {
      const char = s[j];
      freqs.set(char, (freqs.get(char) ?? 0) + 1);

      const freq = freqs.get(char);
      if (maxFreq < freq) {
        maxFreq = freq;
        count = 0;
      } else if (maxFreq === freq) {
        count++;
      }

      if (count === freqs.size - 1) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  return maxLength;
};