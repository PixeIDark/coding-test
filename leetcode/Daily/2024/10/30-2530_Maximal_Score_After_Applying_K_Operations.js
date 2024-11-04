// 최대 값 구해야함 3번 연산해서 선택된 요소 한번 쓰면 ceil i/3 해줘야함.

const nums = [1, 10, 3, 3, 3],
  k = 3;
// Output: 17
// Explanation: You can do the following operations:
// Operation 1: Select i = 1, so nums becomes [1,4,3,3,3]. Your score increases by 10.
// Operation 2: Select i = 1, so nums becomes [1,2,3,3,3]. Your score increases by 4.
// Operation 3: Select i = 2, so nums becomes [1,1,1,3,3]. Your score increases by 3.
// The final score is 10 + 4 + 3 = 17.

// 꺼내 쓸 때마다 heap내에 있는 값을 ceil해줘야함.
// k만큼 반복하는 함수만들고, 최대값으로 ㄱㄱ
var maxKelements = function (nums, k) {
  let heap = [];
  let result = 0;

  const siftUp = (index) => {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (heap[parent] < heap[index]) {
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
      if (left < heap.length && heap[left] > heap[large]) {
        large = left;
      }

      if (right < heap.length && heap[right] > heap[large]) {
        large = right;
      }

      if (large !== index) {
        [heap[index], heap[large]] = [heap[large], heap[index]];
        index = large;
      } else break;
    }
  };

  for (const num of nums) {
    heap.push(num);
    siftUp(heap.length - 1);
  }

  for (let i = 0; i < k; i++) {
    result += heap[0];
    heap[0] = Math.ceil(heap[0] / 3);
    siftDown(0);
  }

  return result;
};

console.log(maxKelements(nums, k));
