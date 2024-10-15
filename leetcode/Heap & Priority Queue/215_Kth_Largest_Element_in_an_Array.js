// k 번째로 큰 값 출력

const nums = [1, 2],
  k = 1;
// Output: 5

// 최소값써서 교체 용이하게.
var findKthLargest = function (nums, k) {
  let heap = [];

  const siftUp = (index) => {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (heap[parent] > heap[index]) {
        [heap[parent], heap[index]] = [heap[index], heap[parent]];
        index = parent;
      } else break;
    }
  };

  const siftDown = (index) => {
    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let large = index;

      if (left < heap.length && heap[left] < heap[large]) {
        large = left;
      }

      if (right < heap.length && heap[right] < heap[large]) {
        large = right;
      }

      if (large !== index) {
        [heap[large], heap[index]] = [heap[index], heap[large]];
        index = large;
      } else break;
    }
  };

  for (const num of nums) {
    if (heap.length < k) {
      heap.push(num);
      siftUp(heap.length - 1);
    } else if (heap[0] < num) {
      heap[0] = num;
      siftDown(0);
    }
  }
  return heap[0];
};

console.log(findKthLargest(nums, k));
