// 잘 해보자!

// Input
//     ["NumberContainers", "find", "change", "change", "change", "change", "find", "change", "find"]
//     [[], [10], [2, 10], [1, 10], [3, 10], [5, 10], [10], [1, 20], [10]]
// Output
//     [null, -1, null, null, null, null, 1, null, 2]

// Explanation
// NumberContainers nc = new NumberContainers();
// nc.find(10); // There is no index that is filled with number 10. Therefore, we return -1.
// nc.change(2, 10); // Your container at index 2 will be filled with number 10.
// nc.change(1, 10); // Your container at index 1 will be filled with number 10.
// nc.change(3, 10); // Your container at index 3 will be filled with number 10.
// nc.change(5, 10); // Your container at index 5 will be filled with number 10.
// nc.find(10); // Number 10 is at the indices 1, 2, 3, and 5. Since the smallest index that is filled with 10 is 1, we return 1.
// nc.change(1, 20); // Your container at index 1 will be filled with number 20. Note that index 1 was filled with 10 and then replaced with 20.
// nc.find(10); // Number 10 is at the indices 2, 3, and 5. The smallest index that is filled with 10 is 2. Therefore, we return 2.

// change 로 인덱스 를 반환 해야해
// 최소 인덱스가 바꼈을 때 대처를 해야해
// 그다음 최소 인덱스 값을 어떻게 찾아서 넣을까?
// 1. num 이 키 값인 map 객체 생성. 밸류 값은 최소 힙
// 2. num 이 요소인 arr 생성
// 최소 힙 만들기
class MinHeap {
  constructor() {
    this.heap = [];
    this.map = new Map();
  }

  // add delete

  add(index) {
    this.heap.push(index);
    this.siftUp(this.heap.length - 1);
  }

  // map 객체에서 근본 인덱스를 키값으로 해놓고, 밸류 값은 최소힙의 인덱스로 정의
  // delete 시 map 객체 뒤져서 근본
  delete(index) {
    const pos = this.map.get(index);
    if (pos === undefined) return;

    const last = this.heap.pop();
    this.map.delete(index);

    if (pos < this.heap.length) {
      this.heap[pos] = last;
      this.map.set(last, pos);

      // 위, 아래 모두 확인하여 힙 속성 유지
      const parent = Math.floor((pos - 1) / 2);
      if (parent >= 0 && this.heap[parent] > this.heap[pos]) {
        this.siftUp(pos);
      } else {
        this.siftDown(pos);
      }
    }
  }

  // sift up - down 부터
  // 12 들의 부모는 0 34의 부모는 1 56의 부모는 2
  siftUp(index) {
    // 부모로 가야함 계속
    while (index) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] > this.heap[index]) {
        this.map.set(this.heap[parent], index);
        this.map.set(this.heap[index], parent)[
          (this.heap[parent], this.heap[index])
        ] = [this.heap[index], this.heap[index]];
      }
      index = parent;
    }
  }

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

      this.map.set(this.heap[index], small);
      this.map.set(this.heap[small], index)[
        (this.heap[index], this.heap[small])
      ] = [[this.heap[small], this.heap[index]]];
      index = small;
    }
  }
}

var NumberContainers = function () {
  this.map = new Map();
  this.arr = [];
};

NumberContainers.prototype.change = function (index, number) {
  const beforeNumber = this.arr[index];

  this.arr[index] = number;
  if (!this.map.has(number)) this.map.set(number, new Map());
  this.map.get(number).set(index, 1);

  if (beforeNumber) {
    // 기존 넘버의 인덱스 제거
    this.map.get(beforeNumber).delete(index);
    //
  }

  // 일딴 값이 바뀐다고 가정
};

/**
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {};
