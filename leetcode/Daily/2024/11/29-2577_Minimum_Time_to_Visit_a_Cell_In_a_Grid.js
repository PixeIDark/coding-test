// 방문 시간보다 같거나 작은 인덱스로만 이동할 수 있고 마지막 인덱스까지 걸리는 최소 시간 출력

const grid = [
  [0, 1, 3, 2],
  [5, 1, 2, 5],
  [4, 3, 8, 6],
];
// Output: 7
// Explanation: One of the paths that we can take is the following:
//     - at t = 0, we are on the cell (0,0).
// - at t = 1, we move to the cell (0,1). It is possible because grid[0][1] <= 1.
// - at t = 2, we move to the cell (1,1). It is possible because grid[1][1] <= 2.
// - at t = 3, we move to the cell (1,2). It is possible because grid[1][2] <= 3.
// - at t = 4, we move to the cell (1,1). It is possible because grid[1][1] <= 4.
// - at t = 5, we move to the cell (1,2). It is possible because grid[1][2] <= 5.
// - at t = 6, we move to the cell (1,3). It is possible because grid[1][3] <= 6.
// - at t = 7, we move to the cell (2,3). It is possible because grid[2][3] <= 7.
// The final time is 7. It can be shown that it is the minimum time possible.

// 다익스트라 + 최소힙 + bfs 최소힙 안쓰면 time limited 뜸
// 시간끌기 Math.floor(time / 2) * 2
class minHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length || 0;
  }

  push(item) {
    this.heap.push(item);
    this.siftUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);

    return min;
  }

  siftUp(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent][0] > this.heap[index][0]) {
        [this.heap[parent], this.heap[index]] = [
          this.heap[index],
          this.heap[parent],
        ];
        index = parent;
      } else break;
    }
  }

  siftDown(index) {
    while (true) {
      const left = index * 2 + 1;
      const right = left + 1;
      let small = index;

      if (left < this.heap.length && this.heap[left][0] < this.heap[small][0]) {
        small = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right][0] < this.heap[small][0]
      ) {
        small = right;
      }

      if (small === index) break;

      [this.heap[index], this.heap[small]] = [
        this.heap[small],
        this.heap[index],
      ];

      index = small;
    }
  }
}

var minimumTime = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  if (m > 1 && n > 1 && grid[0][1] > 1 && grid[1][0] > 1) return -1;
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const pq = new minHeap();
  pq.push([0, 0, 0]);

  const vis = Array.from({ length: m }, () => new Array(n).fill(Infinity));
  vis[0][0] = 0;

  while (pq.size()) {
    const [time, row, col] = pq.pop();

    if (row === m - 1 && col === n - 1) return time;

    if (time > vis[row][col]) continue;

    for (const [dx, dy] of direction) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (newRow < 0 || newCol < 0 || newRow >= m || newCol >= n) continue;

      let newTime = time + 1;
      if (grid[newRow][newCol] > newTime) {
        newTime += Math.floor((grid[newRow][newCol] - time) / 2) * 2;
      }

      if (newTime >= vis[newRow][newCol]) continue;

      vis[newRow][newCol] = newTime;
      pq.push([newTime, newRow, newCol]);
    }
  }

  return -1;
};

console.log(minimumTime(grid));
