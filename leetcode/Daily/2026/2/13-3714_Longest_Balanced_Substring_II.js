// O(n^2) => O(nlogn)
// a b c 만나옴
// 32분
var longestBalanced = function (s) {
  const map = new Map([["0-0", -1]]);
  let maxLength = 1;
  let a = 0;
  let b = 0;
  let c = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "a") a++;
    if (char === "b") b++;
    if (char === "c") c++;

    const key = `${a - b}-${b - c}`;

    if (map.has(key)) {
      maxLength = Math.max(maxLength, i - map.get(key));
    } else {
      map.set(key, i);
    }
  }

  const pairs = [
    ["a", "b", "c"],
    ["a", "c", "b"],
    ["b", "c", "a"],
  ];

  for (const [ch1, ch2, exclude] of pairs) {
    let diff = 0;
    let map = new Map([[0, -1]]);

    for (let i = 0; i < s.length; i++) {
      if (s[i] === exclude) {
        diff = 0;
        map = new Map([[0, i]]);
      } else {
        if (s[i] === ch1) diff++;
        if (s[i] === ch2) diff--;
        if (map.has(diff)) {
          maxLength = Math.max(maxLength, i - map.get(diff));
        } else {
          map.set(diff, i);
        }
      }
    }
  }

  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) count++;
    else count = 1;

    maxLength = Math.max(maxLength, count);
  }

  return maxLength;
};