// 모든 요소가 k 이상이 되기 까지의 연산 횟수

const nums = [999999999, 999999999, 999999999],
  k = 1000000000;
// Output: 2
// Explanation: In the first operation, we remove elements 1 and 2, then add 1 * 2 + 2 to nums. nums becomes equal to [4, 11, 10, 3].
//     In the second operation, we remove elements 3 and 4, then add 3 * 2 + 4 to nums. nums becomes equal to [10, 11, 10].
//     At this stage, all the elements of nums are greater than or equal to 10 so we can stop.
//     It can be shown that 2 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10.

// 최소 힙 이론상 세번째 인덱스까지는 오름차 순이 보장된다.
// 최소 힙의 0, 1 인덱스를 계속 섞어주면 돼 두 인덱스가 모두 k 이상인 경우 종료. 섞을 때 카운트 하도록

class MinHeap {
  constructor(k) {
    this.heap = [];
    this.count = 0;
    this.k = k;
  }

  // k 이상인 얘들 개수 파악, nums.length 랑 비교
  add(val) {
    if (val >= this.k) this.count++;
    this.heap.push(val);
    this.siftUp(this.heap.length - 1);
  }

  cal() {
    // 0, 1 인덱스 선언
    // 맨뒤 두번쨰 맨뒤 pop으로 뽑음
    // 0, 1 인덱스와 요소 교환 후 다운
    // 뽑는거 두개로 과정 나눠야해
    console.log(this.k, this.heap, this.count);
    if (this.count >= this.heap.length) return 0;

    if (this.heap.length === 2) {
      const second = this.heap.pop();
      const first = this.heap.pop();
      return first * 2 + second;
    }

    const first = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);

    const second = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);

    // 3 이하면 마지막 꺼만 [0]에 넣어줘
    return first * 2 + second;
  }

  // this.heap.length -1
  siftUp(index) {
    while (index) {
      const parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] > this.heap[index])
        [this.heap[parent], this.heap[index]] = [
          this.heap[index],
          this.heap[parent],
        ];

      index = parent;
    }
  }

  // 0
  siftDown(index) {
    while (true) {
      let small = index;
      const left = index * 2 + 1;
      const right = index * 2 + 2;

      if (left < this.heap.length && this.heap[small] > this.heap[left])
        small = left;

      if (right < this.heap.length && this.heap[small] > this.heap[right])
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

var minOperations = function (nums, k) {
  const heap = new MinHeap(k);

  for (const num of nums) {
    heap.add(num);
  }

  let result = 0;
  while (true) {
    const num = heap.cal();
    if (!num) return result;

    heap.add(num);
    result++;
  }
};

console.log(minOperations(nums, k));
