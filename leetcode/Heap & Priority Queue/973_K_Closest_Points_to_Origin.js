// 원점에서 가장 가까운 순서로 k개 출력

const points = [
  [1, 3],
  [-2, 2],
  [-3, 4],
];
k = 1;
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

// 우선순위 큐에서 원점 가까운 순으로 정렬? ㅅ
// x^2+y^2의 값이 작을 수록 가까움.
// points 들어오면 우선순위 큐 최소 값을 기준으로 정렬 ㄱㄱ
// heap의 최대 크기를 k로 제한.
// heap의 마지막 값보다 크거나 같은 값은 컷하고 작은 값이오면 원래있던 마지막 값 없애고 다시 재정렬 시켜야해
var kClosest = function (points, k) {
  let heap = [];

  const distance = ([x, y]) => x * x + y * y;

  const siftUp = (index) => {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (distance(heap[parent]) < distance(heap[index])) {
        [heap[parent], heap[index]] = [heap[index], heap[parent]];
        index = parent;
      } else break;
    }
  };

  const siftDown = (index) => {
    let largest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    if (left < heap.length && distance(heap[left]) > distance(heap[largest])) {
      largest = left;
    }
    if (
      right < heap.length &&
      distance(heap[right]) > distance(heap[largest])
    ) {
      largest = right;
    }

    if (largest !== index) {
      [heap[largest], heap[index]] = [heap[index], heap[largest]];
      siftDown(largest);
    }
  };

  const add = (point) => {
    if (heap.length < k) {
      heap.push(point);
      siftUp(heap.length - 1);
    } else if (distance(point) < distance(heap[0])) {
      heap[0] = point;
      siftDown(0);
    }
  };

  for (const point of points) {
    add(point);
  }

  return heap;
};

console.log(kClosest(points, k));
// console.log(Math.pow(2, 3));
