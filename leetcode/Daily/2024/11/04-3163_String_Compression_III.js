// char앞에 개수 붙어서 출력

const word = "aaaaaaaaaaaaaabb";
// Output: "9a5a2b"
// Explanation:
// Initially, comp = "". Apply the operation 3 times, choosing "aaaaaaaaa", "aaaaa", and "bb" as the prefix in each operation.
// For prefix "aaaaaaaaa", append "9" followed by "a" to comp.
// For prefix "aaaaa", append "5" followed by "a" to comp.
// For prefix "bb", append "2" followed by "b" to comp.

// 순서를 못지키고있음 str
// 이러면 객체로 가야함.
// 다른 순서가 또있음 정직하게 가야함.
var compressedString = function (word) {
  if (word.length === 1) {
    return `1${word[0]}`;
  }

  let count = 1;
  let str = "";

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) count++;

    if (count > 9) {
      str += "9";
      str += word[i];
      count = 1;
    }

    if (word[i] !== word[i - 1]) {
      str += count.toString();
      str += word[i - 1];
      count = 1;
    }

    if (i === word.length - 1) {
      str += count.toString();
      str += word[i];
    }
  }

  return str;
};

console.log(compressedString(word));
