// 홀수이면 중간값 짝수면 두 중간값의 평균.

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0

// 좌, 우 비교 수행 <= 하.. 의미없다. depth같은 상태에서 이모랑도 비교가 되야하는데
// 그럼 어떻게하냐? 시발
// 값이 큰쪽은 최소힙 작은쪽은 최대힙 써야하는데 넣는 기준을 어케해야하지?
// 클로드도 못품 ㅈㅈ
var MedianFinder = function () {
  this.minHeap = [];
  this.maxHeap = [];
};

MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.length === 0 || num <= -this.maxHeap[0]) {
    this.maxHeap.push(-num);
  } else {
    this.minHeap.push(num);
  }
  this.ruler();
};

MedianFinder.prototype.ruler = function () {
  if (this.minHeap.length + 1 < this.maxHeap.length) {
    this.minHeap.push(-this.maxHeap.pop());
    this.siftDown(0, this.maxHeap, (a, b) => a - b);
  } else if (this.minHeap.length > this.maxHeap.length) {
    this.maxHeap.push(-this.minHeap.pop());
    this.siftDown(0, this.minHeap, (a, b) => b - a);
  }
};

MedianFinder.prototype.siftDown = function (index, heap, com) {
  while (true) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let small = index;

    if (left < heap.length && com(heap[left], heap[small]) > 0) {
      small = left;
    }

    if (right < heap.length && com(heap[right], heap[small]) > 0) {
      small = right;
    }

    if (small === index) break;
    [heap[index], heap[small]] = [heap[small], heap[index]];
    index = small;
  }
};

MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.length === this.minHeap.length) {
    return (-this.maxHeap[0] + this.minHeap[0]) / 2;
  }
  return -this.maxHeap[0];
};

function processOperations(operations, values) {
  let medianFinder = null;
  let results = [];

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "MedianFinder":
        medianFinder = new MedianFinder();
        results.push(null);
        break;
      case "addNum":
        medianFinder.addNum(values[i][0]);
        results.push(null);
        break;
      case "findMedian":
        results.push(medianFinder.findMedian());
        break;
    }
  }

  return results;
}

const operations = [
  "MedianFinder",
  "addNum",
  "findMedian",
  "addNum",
  "findMedian",
  "addNum",
  "findMedian",
  "addNum",
  "findMedian",
  "addNum",
  "findMedian",
];
const values = [[], [-1], [], [-2], [], [-3], [], [-4], [], [-5], []];

console.log(processOperations(operations, values));
