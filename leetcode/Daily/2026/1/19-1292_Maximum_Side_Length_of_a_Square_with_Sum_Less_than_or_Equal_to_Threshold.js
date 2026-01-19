// 각요소 합이 threshold 이하인 **정사각형**의 최대 변의 길이 없으면 0
// 크기는 최대 300, 브루트포스 가능
// 1 ~ 300 으로 이진탐색
// 62분
var maxSideLength = function (mat, threshold) {
  const n = mat.length;
  const m = mat[0].length;
  const arr = mat.flat();

  if (arr.every(el => el > threshold)) return 0;

  const bs = (k) => {
    if (k === 0) return true;


    for (let i = 0; i < n - k + 1; i++) {
      for (let j = 0; j < m - k + 1; j++) {
        const vis = new Set([`${i}-${j}`]);

        let pq = [[i, j]];
        let sum = 0;
        let count = 0;
        let value = 1;
        let length = 0;

        while (pq.length > 0) {
          const [y, x] = pq.shift();
          sum += mat[y][x];

          if (sum > threshold) break;

          count++;

          if (count >= value) {
            count -= value;
            value += 2;
            length++;
          }

          if (length === k) return true;

          for (const [dy, dx] of [[0, 1], [1, 0], [1, 1]]) {
            const ny = dy + y;
            const nx = dx + x;

            if (vis.has(`${ny}-${nx}`) || ny >= i + k || nx >= j + k) continue;
            vis.add(`${ny}-${nx}`);
            pq.push([ny, nx]);
          }
        }
      }
    }

    return false;
  };

  let left = 0;
  let right = Math.min(n, m);

  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);

    if (bs(mid)) left = mid;
    else right = mid - 1;
  }

  return left;
};