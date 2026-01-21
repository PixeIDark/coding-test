// 브루트포스
// 7분
function solution(numbers, target) {
  const n = numbers.length;
  let result = 0;

  const dfs = (sum, index) => {
    if (index === n) {
      if (sum === target) result++;
      return;
    }

    dfs(sum + numbers[index], index + 1);
    dfs(sum - numbers[index], index + 1);
  };
  dfs(0, 0);

  return result;
}










