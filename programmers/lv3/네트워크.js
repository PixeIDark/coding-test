// 네트워크 개수를 리턴
// dfs로 순회하다가 자기 자신 참조가 나오면 중단
// 또한 vis만들어서 중복방지
// 14분
function solution(n, computers) {
  const result = [];
  const vis = Array(n).fill(false);

  const dfs = (curr, share) => {
    if (vis[curr]) return;
    vis[curr] = true;
    share.push(curr);

    for (let i = 0; i < n; i++) {
      const next = computers[curr][i];
      if (next === 0 || i === curr) continue;
      dfs(i, share);
    }

    return share;
  };


  for (let i = 0; i < n; i++) {
    const arr = dfs(i, []);
    if (arr) result.push(arr);

  }

  return result.length;
}