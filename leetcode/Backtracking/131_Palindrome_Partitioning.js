// 팬린드롬 되는 집합 모두 찾아서 반환

const s = "aab";
// Output: [["a","a","b"],["aa","b"]]

var partition = function (s) {
  let result = [];
  const bt = (k, temp) => {
    if (k === s.length) {
      result.push(temp.slice());
      return;
    }

    for (let i = k; i < s.length; i++) {
      if (validPalindrome(k, i)) {
        temp.push(s.substring(k, i + 1));
        bt(i + 1, temp);
        temp.pop();
      }
    }
  };
  bt(0, []);

  return result;
};

const validPalindrome = (l, r) => {
  while (l <= r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
};

console.log(partition(s));
