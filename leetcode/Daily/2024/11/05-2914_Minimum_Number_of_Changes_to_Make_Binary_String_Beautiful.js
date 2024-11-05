// 같은 문자열 그룹인 하위 그룹으로 나누기 위해 변경해야하는 요소의 개수

const s = "1011100101";
// Output: 2
// Explanation: We change s[1] to 1 and s[3] to 0 to get string "1100".
// It can be seen that the string "1100" is beautiful because we can partition it into "11|00".
// It can be proven that 2 is the minimum number of changes needed to make the string beautiful.

// 일단 전체를 기준으로 바꿔보고, 그 담 2갈죽 3갈죽을해서 최소값을 출력하자.
// stack에 나머지가 0이 되게하는 i를 넣어
var minChanges = function (s) {
  const n = s.length;
  const stack = [];
  const result = [];

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 1) continue;
    if (n % i === 0) stack.push(i);
  }

  while (stack.length > 0) {
    const sum = stack.pop();
    let count = 0;
    let zero = 0;
    let one = 0;

    for (let i = 0; i < n; i++) {
      if (s[i] === "1") one++;
      if (s[i] === "0") zero++;

      if ((i + 1) % sum === 0) {
        count += Math.min(zero, one);
        zero = 0;
        one = 0;
      }
    }
    result.push(count);
  }

  return Math.min(...result);
  // return result;
};

console.log(minChanges(s));
