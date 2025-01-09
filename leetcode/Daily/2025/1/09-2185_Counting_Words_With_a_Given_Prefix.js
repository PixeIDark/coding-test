// 앞에 pref 포함된 word 개수 출력

const words = ["pay", "attention", "practice", "attend"],
  pref = "at";
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

var prefixCount = function (words, pref) {
  return words.filter((word) => word.startsWith(pref)).length;
};

console.log(prefixCount(words, pref));
