// 우선 순위 큐 클래스 만들기.
// k 번째로 큰 숫자를 add마다 반환해야함.

// Input:
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

// Output: [null, 4, 5, 5, 8, 8]

// Explanation:

// 처음 생성될 때부터 add를 거쳐서 되야함.
// 길이를 잘 판단해서 해봐라 최대 길이는 k-1
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.heap = [];
    for (const num of nums) {
      this.add(num);
    }
  }

  add(num) {
    if (this.heap.length < this.k) {
      this.insert(num);
    } else if (this.heap[0] < num) {
      this.heap[0] = num;
      this.heapify(0);
    }
    console.log(this.heap[0]);
    return this.heap[0];
  }

  // 힙 요소 추가
  insert(num) {
    this.heap.push(num);
    this.siftUp(this.heap.length - 1);
  }

  // 힙 요소 들어갈 때 쓰는 놈
  siftUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] <= this.heap[index]) break;

      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];

      index = parent;
    }
  }

  // 재정렬 하는 새끼
  heapify(index) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let small = index;

    if (left < this.heap.length && this.heap[left] < this.heap[small]) {
      small = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[small]) {
      small = right;
    }

    if (small !== index) {
      [this.heap[small], this.heap[index]] = [
        this.heap[index],
        this.heap[small],
      ];
      this.heapify(small);
    }
  }
}

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3); // return 4
kthLargest.add(5); // return 5
kthLargest.add(10); // return 5
kthLargest.add(9); // return 8
kthLargest.add(4); // return 8
