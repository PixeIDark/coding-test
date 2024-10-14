// 가장 큰 돌 끼리 부딫쳐서 살아남는 돌의 무게.(짱돌 서바이벌)

const stones = [1, 3];
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

// length - 1, length -2 끼리 항상 부딫치게하면 됨.
// 부딫치고나서는 y-x의 법칙을 수행해야하니 heapify 수행(heap재정렬)
// stones의 요소가 하나 남으면 그때 출력.
var lastStoneWeight = function (stones) {
  let heap = [];

  const siftUp = (index) => {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (heap[index] > heap[parent]) {
        [heap[index], heap[parent]] = [heap[parent], heap[index]];
        index = parent;
      } else break;
    }
  };

  const heapify = (index) => {
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
      [heap[large], heap[index]] = [heap[index], heap[large]];
      heapify(large);
    }
  };

  for (const stone of stones) {
    heap.push(stone);
    siftUp(heap.length - 1);
  }

  // 일단 재귀말고 반복문의 pop기준으로 해보자.
  while (heap.length > 1) {
    const x = heap[0];
    heap[0] = heap.pop();
    heapify(0);

    const y = heap[0];
    if (heap.length === 1) {
      heap.pop();
    } else {
      heap[0] = heap.pop();
      heapify(0);
    }

    if (x > y) {
      heap.push(x - y);
      siftUp(heap.length - 1);
    }
  }

  return heap[0] ? heap[0] : 0;
};

console.log(lastStoneWeight(stones));
