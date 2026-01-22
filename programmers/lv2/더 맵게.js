// 작업 최소 횟수 반환
// 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
// 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.
// 1. scoville 내림차로 정렬하기
// 2. .at(-1) 이 K보다 작을 시, pop으로 조합해서 push 후, 내림차 정렬
// 3. 아니면 break
// sort 시간복잡도 못뚫음. pq 만들어야함
// 65분
class MinQueue {
  queue = [];

  add(el) {
    this.queue.push(el);
    this.siftUp(this.size() - 1);
  }

  get() {
    return this.queue[0];
  }

  pop() {
    const value = this.queue[0];
    const temp = this.queue.pop();
    if (this.size() > 0) this.queue[0] = temp;

    this.siftDown(0);

    return value;
  }

  size() {
    return this.queue.length;
  }

  siftUp(child) {
    while (child > 0) {
      const parent = Math.ceil(child / 2) - 1;

      if (this.queue[parent] > this.queue[child]) {
        [this.queue[parent], this.queue[child]] = [this.queue[child], this.queue[parent]];
      }

      child = parent;
    }
  }

  siftDown(parent) {
    while (true) {
      const left = parent * 2 + 1;
      const right = parent * 2 + 2;
      let small = parent;

      if (left < this.size() && this.queue[small] > this.queue[left]) {
        small = left;
      }

      if (right < this.size() && this.queue[small] > this.queue[right]) {
        small = right;
      }

      if (small !== parent) {
        [this.queue[parent], this.queue[small]] = [this.queue[small], this.queue[parent]];
        parent = small;
      } else break;
    }
  }
}

function solution(scoville, K) {
  const queue = new MinQueue();

  for (const num of scoville) {
    queue.add(num);
  }

  let count = 0;

  while (true) {
    const value = queue.get();

    if (value >= K) break;

    if (queue.size() < 2) return -1;

    count++;
    const firstMin = queue.pop();
    const secondMin = queue.pop();
    const newScovil = firstMin + (secondMin * 2);
    queue.add(newScovil);
  }

  return count;
}