// 소수인지 판별하는 함수가필요함
// 그 후 dfs로 소수만들면됨.
// 21분
function solution(numbers) {

  const isPrame = (str) => {
    if (str[0] === "0" || str === "") return false;

    const num = Number(str);

    if (num === 1) return false;
    // num = 7
    // Math.sqrt(num) = 2.6
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  // numbers 각 숫자는 한 번만 꺼내쓸 수 있음
  // 인덱스를 기준으로 방문표시
  let vis = Array(numbers.length).fill(false);
  const set = new Set();

  const dfs = (str) => {
    if (isPrame(str)) {
      set.add(str);
    }

    for (let i = 0; i < numbers.length; i++) {
      if (vis[i]) continue;

      vis[i] = true;
      dfs(str + numbers[i]);
      vis[i] = false;
    }
  };

  dfs("");

  console.log(isPrame(1010));

  return set.size;
}