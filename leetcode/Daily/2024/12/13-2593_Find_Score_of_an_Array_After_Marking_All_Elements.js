// 가장 작은수에 빨간 표시하고 그 주변은 파란표시함. 계속 반복. 모든 배열이 표시될 때까지 표시함. 빨간 표시의 합

const nums = [4, 4, 6, 6, 2, 2, 9];
// Output: 7
// Explanation: We mark the elements as follows:
//     - 1 is the smallest unmarked element, so we mark it and its two adjacent elements: [2,1,3,4,5,2].
// - 2 is the smallest unmarked element, so we mark it and its left adjacent element: [2,1,3,4,5,2].
// - 4 is the only remaining unmarked element, so we mark it: [2,1,3,4,5,2].
//     Our score is 1 + 2 + 4 = 7.
// 값이 같으면 인덱스 낮은쪽 우선

// 원본 인덱스를 가진 priority heap 를 만듬
// 가장 작은놈을 또 표시할텐데, set 에 처넣은 표시 인덱스인 경우 컨티뉴 => 표시한놈 result 에 계속 더해줌.
// 최대힙 하고 마지막놈으로 해야함.
class Heap {
  constructor(arr) {
    this.vis = new Set();
    this.heap = arr.map((e, i) => [e, i]);
    this.result = 0;
    for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; i--) {
      this.siftDown(i);
      this.siftDown(0);
    }
  }

  fight() {
    while (this.heap.length) {
      const [e, i] = this.heap[0];
      if (this.heap.length >= 2) this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.siftUp(this.heap.length - 1);
      this.siftDown(0);

      if (this.vis.has(i)) continue;
      this.result += e;
      this.vis.add(i - 1);
      this.vis.add(i + 1);
    }
  }

  siftUp(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (!this.heap[parent] || !this.heap[index]) break;

      if (
        this.heap[parent][0] > this.heap[index][0] ||
        (this.heap[parent][0] === this.heap[index][0] &&
          this.heap[parent][1] > this.heap[index][1])
      ) {
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
      let small = index;
      const left = index * 2 + 1;
      const right = index * 2 + 2;

      if (!this.heap[small] || !this.heap[left] || !this.heap[right]) break;

      if (
        (left < this.heap.length && this.heap[left][0] < this.heap[small][0]) ||
        (this.heap[left][0] === this.heap[small][0] &&
          this.heap[left][1] < this.heap[small][1])
      )
        small = left;
      if (
        (right < this.heap.length &&
          this.heap[right][0] < this.heap[small][0]) ||
        (this.heap[right][0] === this.heap[small][0] &&
          this.heap[right][1] < this.heap[small][1])
      )
        small = right;

      if (index === small) break;
      [this.heap[index], this.heap[small]] = [
        this.heap[small],
        this.heap[index],
      ];
      index = small;
    }
  }
}

var findScore = function (nums) {
  const heap = new Heap(nums);
  heap.fight();
  return heap.result;
};
console.log(findScore(nums));
