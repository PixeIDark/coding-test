// 이진인 "111" 을 그대로 숫자로 바꾸면 111. 이러한 것을 k로 나누었을 때 길이가 가장 작은거 무엇인지.
// 걍 순차적으로 1 => 11 이런식으로 진행해보면 되는게 아닌지
// 16분
var smallestRepunitDivByK = function (k) {
  let num = 0;

  for (let i = 0; i < k; i++) {
    num = (num * 10 + 1) % k;
    if (num === 0) return i + 1;
  }

  return -1;
};