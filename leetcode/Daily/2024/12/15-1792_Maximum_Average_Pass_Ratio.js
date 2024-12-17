console.log((2 / 3 + 1 / 3) / 2);
console.log((4 / 5 + 1 / 3) / 2);
console.log((2 / 3 + 3 / 5) / 2);
console.log((3 / 4 + 2 / 4) / 2);

// total 같으면 pass 낮은쪽에 투입해라.
const classes = [
    [1, 2],
    [3, 5],
    [2, 2],
  ],
  extraStudents = 2;
// Output: 0.78333
// Explanation: You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333.

// 걍 확률 제일 낮은 쪽 찾아서 투입
class Heap {
  constructor() {
    this.heap = [];
  }

  add(pass, total) {
    this.heap.push([pass, total]);
    this.siftUp(this.heap.length - 1);
  }

  chance(student) {
    let [pass, total] = this.heap[0];
    pass += student;
    total += student;
    this.heap[0] = [pass, total];
    this.siftDown(0);
  }

  siftUp(index) {
    while (index) {
      const parent = Math.floor((index - 1) / 2);
      const [iPass, iTotal] = this.heap[index];
      const [pPass, pTotal] = this.heap[parent];

      if (iPass / iTotal >= pPass / pTotal) break;
      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];
      index = parent;
    }
  }

  siftDown(index) {
    while (true) {
      let small = index;

      const left = index * 2 + 1;
      const [lPass, lTotal] = this.heap[left];

      const right = index * 2 + 2;
      const [rPass, rTotal] = this.heap[right];

      if (
        left < this.heap.length &&
        lPass / lTotal < this.heap[small][0] / this.heap[small][1]
      )
        small = left;

      if (
        right < this.heap.length &&
        rPass / rTotal < this.heap[small][0] / this.heap[small][1]
      )
        small = right;

      if (small !== index) break;
      [this.heap[index], this.heap[small]] = [
        this.heap[small],
        this.heap[index],
      ];
      index = small;
    }
  }
}

var maxAverageRatio = function (classes, extraStudents) {
  const heap = new Heap();
  classes.forEach(([pass, total]) => heap.add(pass, total));
  while (extraStudents) {
    heap.chance(1);
    extraStudents--;
  }

  return heap;
};

console.log(maxAverageRatio(classes, extraStudents));
