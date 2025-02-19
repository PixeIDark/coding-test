// 길이 n 인 집합들을 사전적 순서로 정렬 시 k 번째의 것 출력 없으면 "" 출력

const n = 1,
  k = 4;
// Output: "cab"
// Explanation: There are 12 different happy string of length 3 ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]. You will find the 9th string = "cab"

var getHappyString = function (n, k) {
  const chars = ["a", "b", "c"];
  let count = 0;
  let result = [];

  const bt = (arr) => {
    if (arr.length === n) {
      result = arr;
      count++;
      return;
    }

    for (let i = 0; i < chars.length; i++) {
      if (arr.length >= 1 && arr[arr.length - 1] === chars[i]) continue;

      arr.push(chars[i]);
      bt(arr);
      if (count === k) return result.join("");
      arr.pop(chars[i]);
    }
  };

  return bt([]) || "";
};

console.log(getHappyString(n, k));
