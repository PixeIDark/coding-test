// 최소 값

const pattern = "DDD";
// Output: "123549876"
// Explanation:
//     At indices 0, 1, 2, and 4 we must have that num[i] < num[i+1].
//     At indices 3, 5, 6, and 7 we must have that num[i] > num[i+1].
//     Some possible values of num are "245639871", "135749862", and "123849765".
//     It can be proven that "123549876" is the smallest possible num that meets the conditions.
//     Note that "123414321" is not possible because the digit '1' is used more than once.

// pattern 길이에 따라 max number 정해짐 4 => 5
// for 문해서 max number 까지 반복 해서 넣고 재귀해서 다음 숫자를 패턴에 따라 추가.
var smallestNumber = function (pattern) {
  const set = new Set();
  const maxNum = pattern.length + 1;

  // 숫자 중복 불가능하니까 set으로 정리
  const bt = (str, set) => {
    if (str.length === maxNum) {
      return str;
    }
    // 패턴에 따른 증가 감소 넣어
    // 패턴을 따르지 않음.
    // 1 부터 넣으니까 가장 빨리 찾은게 최소 값임.
    for (let i = 1; i <= maxNum; i++) {
      if (set.has(i)) continue;

      if (str.length > 0) {
        if (pattern[str.length - 1] === "I" && str[str.length - 1] >= i)
          continue;
        else if (pattern[str.length - 1] === "D" && str[str.length - 1] <= i)
          continue;
      }

      const newStr = str + i;

      set.add(i);
      const result = bt(newStr, set);
      if (result) return result;
      set.delete(i);
    }
  };

  // 첫 숫자는 랜덤으로 해야해
  // for문 합쳐라 재귀
  // str 대신 arr 하면 더 좋음
  return bt("", set);
};

console.log(smallestNumber(pattern));
