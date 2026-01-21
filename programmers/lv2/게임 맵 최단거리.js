// 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return
// 상대 팀 진영에 도착할 수 없을 때는 -1을 return
// 0은 벽이 있는 자리, 1은 벽이 없는 자리
// bfs 로 탐색
// 13분
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const vis = new Set(["0-0"]);
  const queue = [[0, 0, 1]]; // [y, x, move]
  let k = 0;

  while (queue.length > k) {
    const [y, x, move] = queue[k++];

    if (y === n - 1 && x === m - 1) return move;

    for (const [dy, dx] of dirs) {
      const ny = y + dy;
      const nx = x + dx;
      const str = `${ny}-${nx}`;
      if (vis.has(str) || ny < 0 || nx < 0 || ny >= n || nx >= m || maps[ny][nx] === 0) continue;

      vis.add(str);
      queue.push([ny, nx, move + 1]);
    }
  }

  return -1;
}