// 이게 뭔데 씹덕아?
// stack: 가장 늦게 들어온놈이 가장 빠르게 나감 push - pop
// heap: 가장 빨리 들어온놈이 가장 빠르게 나감 unshift - pop
// list: 알아서 잘 나감.

// 우선순위 큐는 기본적으로 최소 값 혹은 최대 값을 루트에 두고,
// 최소 값 기준: 루트의 자식들 중에서 최소 값이 생기면 루트와 위치를 전환함. => heapify, 핵심개념임.
// 즉, stack, heap과 다르게 들어온 순서가 중요한게 아니라, 알고리저 나름의 우선 순위를 매길 수 있음

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  heapify(item) {
    this.height = Math.floor(Math.log2(this.heap.length)) + 1;
  }

  add(item) {
    this.heap.push(item);
  }
}
