// guard는 동서남북을 감시하며 wall에 시야가 막히지않는이상 거리제한이 없음
// guard가 감시하지 않는 셀의 개수 출력
// ["", "", "G", "W", ""]
// 27분
var countUnguarded = function (m, n, guards, walls) {
  const board = Array.from({length: m}, () => Array(n).fill(""));
  let count = 0;

  guards.forEach(([y, x]) => board[y][x] = "G");
  walls.forEach(([y, x]) => board[y][x] = "W");

  const lookAtThat = (y, x, dy, dx) => {
    const ny = y + dy;
    const nx = x + dx;

    // board[ny][nx] === "G" 이거 하나 차이로 TLE와 통과 갈림 테케 존나게 악랄함..
    if (ny < 0 || nx < 0 || ny >= m || nx >= n || board[ny][nx] === "W" || board[ny][nx] === "G") return;

    if (board[ny][nx] === "") {
      board[ny][nx] = "E";
      count++;
    }

    lookAtThat(ny, nx, dy, dx);
  };

  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  for (const [y, x] of guards) {
    for (const [dy, dx] of dirs) {
      lookAtThat(y, x, dy, dx);
    }
  }

  return m * n - guards.length - walls.length - count;
};