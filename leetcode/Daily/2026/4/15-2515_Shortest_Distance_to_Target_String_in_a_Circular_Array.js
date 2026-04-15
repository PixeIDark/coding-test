// 8분
var closestTarget = function (words, target, startIndex) {
  const n = words.length;

  words = [...words, ...words, ...words];
  startIndex += n;

  let left = startIndex;
  let right = startIndex;

  while (left >= 0 || right < n * 3) {
    if (words[left] === target) return startIndex - left;
    if (words[right] === target) return right - startIndex;

    left--;
    right++;
  }

  return -1;
};