// 시계 방향으로 1칸씩 회전시키고, 회전된 값들중 최소값 출력

const rows = 3,
  columns = 3,
  queries = [
    [1, 1, 2, 2],
    [1, 2, 2, 3],
    [2, 1, 3, 2],
    [2, 2, 3, 3],
  ];
// Output: [8, 10, 25]

// (y, x, y+1, x)
// 우, 하, 좌, 상 <= 이형식의 배열로 queries 를 변환 push 로 + while문 연계
// dfs 중 계속 최소값 들고 댕겨야함. 이전 값도 들고다녀야함.
function solution(rows, columns, queries) {
  const box = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: columns }, (_, j) => i * columns + j + 1),
  );
  const dfs = (start, prev, query, min) => {
    if (query.length === 0) {
      result.push(min);
      return;
    }
    min = Math.min(prev, min);
    const [y, x] = start;

    const curr = box[y][x];
    box[y][x] = prev;
    let [count, dy, dx] = query[query.length - 1];

    count--;
    query[query.length - 1][0] = count;
    if (count <= 0) query.pop();

    dfs([y + dy, x + dx], curr, query, min);
  };

  // query 로 0되면 pop, start 한번만 주고 다음부터는 없음
  // 상, 좌, 하, 우 순으로 넣어 상은 하 보다 -1
  // prev 할당해주고 box 변화 시켜야해 넘어가면
  const result = [];

  for (const [a, b, c, d] of queries) {
    const prev = box[a][b - 1];

    dfs(
      [a - 1, b - 1],
      prev,
      [
        [c - a - 1, -1, 0],
        [d - b, 0, -1],
        [c - a, 1, 0],
        [d - b, 0, 1],
      ],
      prev,
    );
  }

  return result;
}

console.log(solution(rows, columns, queries));
