// 통신하는 서버 수 찾기 같은 행, 같은 열에 있으면 통신함

const grid = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [1, 0, 0, 0],
  [0, 0, 1, 1],
];
// Output: 4
// Explanation: The two servers in the first row can communicate with each other. The two servers in the third column can communicate with each other. The server at right bottom corner can't communicate with any other server.

// bfs 갈겨라 vis랑
var countServers = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const vis = Array.from({ length: m }, () => Array(n).fill(0));
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let result = 0;

  const dfs = (y, x, dir) => {
    let l = 0;

    if (grid[y][x]) {
      l++;
      vis[y][x] = 1;
      for (let i = 0; i < 4; i++) {
        const [dy2, dx2] = dirs[i];
        const ny2 = dy2 + y;
        const nx2 = dx2 + x;

        if (ny2 >= 0 && nx2 >= 0 && ny2 < m && nx2 < n && !vis[ny2][nx2])
          l += dfs(ny2, nx2, i);
      }
    } else {
      const [dy, dx] = dirs[dir];
      const ny = dy + y;
      const nx = dx + x;
      if (ny >= 0 && nx >= 0 && ny < m && nx < n && !vis[ny][nx])
        l += dfs(ny, nx, dir);
    }

    return l;
  };

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (!grid[y][x] || vis[y][x]) continue;
      let l = 0;
      l += dfs(y, x);

      if (l >= 2) result += l;
    }
  }

  return result;
};

console.log(countServers(grid));
