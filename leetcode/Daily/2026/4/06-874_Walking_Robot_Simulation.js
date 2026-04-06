// command, 양수일 시 북쪽이동, -1은 오른쪽회전, -2은 왼쪽회전
// 최종 좌표 제곱합 반환
// 장애물에 막히면 거기서 멈춤
// 해쉬맵에 장애물 배치하고 한칸씩 일일이 검증하면서 해보자
// 가장 멀리 떨어진 지점을 기록해야함
// 43분..
var robotSim = function (commands, obstacles) {
  const map = new Map();
  let dir = 0;
  let location = [0, 0];
  let max = 0;

  for (const [x, y] of obstacles) {
    if (!map.has(x)) map.set(x, new Map());
    map.get(x).set(y, true);
  }

  const move = (count, dir, x, y) => {
    if (count === 0) return [x, y];

    let nx = x;
    let ny = y;

    if (dir === 0) ny += 1;
    if (dir === 1) nx += 1;
    if (dir === 2) ny -= 1;
    if (dir === 3) nx -= 1;

    if (map.get(nx)?.get(ny)) return [x, y];

    return move(count - 1, dir, nx, ny);
  };

  for (const command of commands) {
    if (command < 0) {
      if (command === -1) dir += 1;
      if (command === -2) dir += 3;

      dir %= 4;
      continue;
    }

    const newLocation = move(command, dir, location[0], location[1]);
    location = newLocation;
    max = Math.max(max, location[0] * location[0] + location[1] * location[1]);
  }

  return max;
};