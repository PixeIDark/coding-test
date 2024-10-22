// end - start + 1 아니면 -1 최소간격에 들어가면

const intervals = [
    [1, 4],
    [2, 4],
    [3, 6],
    [4, 4],
  ],
  queries = [2, 3, 4, 5];
// Output: [3,3,1,4]
// Explanation: The queries are processed as follows:
// - Query = 2: The interval [2,4] is the smallest interval containing 2. The answer is 4 - 2 + 1 = 3.
// - Query = 3: The interval [2,4] is the smallest interval containing 3. The answer is 4 - 2 + 1 = 3.
// - Query = 4: The interval [4,4] is the smallest interval containing 4. The answer is 4 - 4 + 1 = 1.
// - Query = 5: The interval [3,6] is the smallest interval containing 5. The answer is 6 - 3 + 1 = 4.

// queries에 for문 걸고 intervals 하나씩 넣어라 그중 가장 간격 작은 거 에하고.
// queries의 요소보다 start가 크면 과감히 생략.
// end - start min 값으로 해야함.
// 중첩 for문으로 시간초과
// 흠... 최소힙 구현..
var minInterval = function (intervals, queries) {
  intervals.sort((a, b) => a[0] - b[0]);
  const newQueries = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]);

  const arr = new Array(queries.length).fill(-1);
  const heap = new Heap();
  let i = 0;

  for (const [q, prevIndex] of newQueries) {
    while (i < intervals.length && q >= intervals[i][0]) {
      heap.add([intervals[i][1] - intervals[i][0] + 1, intervals[i][1]]);
      i++;
    }

    while (!heap.isEmpty() && heap.peek()[1] < q) {
      heap.remove();
    }

    if (!heap.isEmpty()) arr[prevIndex] = heap.peek()[0];
  }

  return arr;
};

class Heap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }

  add(item) {
    this.heap.push(item);
    this.siftUp(this.heap.length - 1);
  }

  remove() {
    if (this.heap.length === 0) return;

    if (this.heap.length === 1) {
      this.heap.pop();
    } else {
      this.heap[0] = this.heap.pop();
      this.siftDown(0);
    }
  }

  siftUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.heap[index][0] < this.heap[parent][0]) {
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
      const right = index * 2 + 2;
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

      if (small !== index) {
        [this.heap[index], this.heap[small]] = [
          this.heap[small],
          this.heap[index],
        ];
        index = small;
      } else break;
    }
  }
}

console.log(minInterval(intervals, queries));
