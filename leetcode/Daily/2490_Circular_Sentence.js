// 순환: 단어의 마지막 철자는 다음 단어의 첫 철자와 같아야함. 대소문자 구분있음. 마지막문자의 마지막 철자는 첫 단어의 첫 철자와 같아야함.

const sentence = "Leetcode is cool";
// Output: true
// Explanation: The words in sentence are ["leetcode", "exercises", "sound", "delightful"].
// - leetcode's last character is equal to exercises's first character.
// - exercises's last character is equal to sound's first character.
// - sound's last character is equal to delightful's first character.
// - delightful's last character is equal to leetcode's first character.
// The sentence is circular.

var isCircularSentence = function (sentence) {
  const arr = sentence.split(" ");

  const start = arr[0][0];
  const end = arr[arr.length - 1][arr[arr.length - 1].length - 1];

  if (start !== end) return false;

  if (arr.length === 1) return true;

  for (let i = 1; i < arr.length; i++) {
    const front = arr[i - 1][arr[i - 1].length - 1];
    const back = arr[i][0];

    if (front !== back) return false;
  }

  return true;
};

console.log(isCircularSentence(sentence));
