// 잘 곱해서 반환해주자

const nums = [1, 5, 5, 4],
  k = 5,
  multiplier = 2;
// Output: [8,4,6,5,6]
// Explanation:
//     Operation	Result
// After operation 1	[2, 2, 3, 5, 6]
// After operation 2	[4, 2, 3, 5, 6]
// After operation 3	[4, 4, 3, 5, 6]
// After operation 4	[4, 4, 6, 5, 6]
// After operation 5	[8, 4, 6, 5, 6]
// 최소 값 두 개이상이 면 먼저 나온 값 곱하자

// [2,2,1,3,5,6] [2,2,2,3,5,6] [4,2,2,3,5,6]
// 최소힙 가자

class Heap {
  constructor() {
    this.heap = [];
  }

  add(e, i) {
    this.heap.push([e, i]);
    this.siftUp(this.heap.length - 1);
  }

  change(num) {
    const [e, i] = this.heap[0];
    this.heap[0] = [e * num, i];
    this.siftDown(0);
    console.log(this.heap);

    return [e * num, i];
  }

  siftUp(index) {
    while (index) {
      let parent = Math.floor((index - 1) / 2);

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

      if (
        left < this.heap.length &&
        (this.heap[left][0] < this.heap[small][0] ||
          (this.heap[left][0] === this.heap[small][0] &&
            this.heap[left][1] < this.heap[small][1]))
      )
        small = left;
      if (
        right < this.heap.length &&
        (this.heap[right][0] < this.heap[small][0] ||
          (this.heap[right][0] === this.heap[small][0] &&
            this.heap[right][1] < this.heap[small][1]))
      )
        small = right;

      if (small === index) break;

      [this.heap[index], this.heap[small]] = [
        this.heap[small],
        this.heap[index],
      ];
      index = small;
    }
  }
}

var getFinalState = function (nums, k, multiplier) {
  const heap = new Heap();
  nums.forEach((e, i) => heap.add(e, i));

  while (k) {
    const [e, i] = heap.change(multiplier);

    nums[i] = e;
    k--;
  }

  return nums;
};

console.log(getFinalState(nums, k, multiplier));
