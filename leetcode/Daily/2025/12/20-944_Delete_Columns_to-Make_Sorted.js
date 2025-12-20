// 10분
var minDeletionSize = function (strs) {
  const arr = Array(strs[0].length).fill("");

  for (const str of strs) {
    for (let i = 0; i < str.length; i++) {
      arr[i] += str[i];
    }
  }

  let result = 0;

  for (const str of arr) {
    const sortedStr = str.split("").sort().join("");

    if (str !== sortedStr) result++;
  }

  return result;
};