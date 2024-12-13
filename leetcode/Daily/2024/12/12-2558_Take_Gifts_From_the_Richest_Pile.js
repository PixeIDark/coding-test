// 가장 큰 선물 k 번 제곱근 만 남기고 모든 선물 합

const gifts = [1, 1, 1, 1],
  k = 4;
// Output: 29
// Explanation:
//     The gifts are taken in the following way:
//     - In the first second, the last pile is chosen and 10 gifts are left behind.
// - Then the second pile is chosen and 8 gifts are left behind.
// - After that the first pile is chosen and 5 gifts are left behind.
// - Finally, the last pile is chosen again and 3 gifts are left behind.
//     The final remaining gifts are [5,8,9,4,3], so the total number of gifts remaining is 29.

// 반오름차순으로 정렬
// 우선순위 큐 써?
// 최대큐
class LargeQueue {
  constructor(arr) {
    this.queue = arr;
    for (let i = Math.floor(this.queue.length / 2) - 1; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  // 가장 앞의 요소가 제곱근 당하고, 얘 퇴물 됐으니 위치 바꿔줘야함.
  sqrt() {
    this.queue[0] = Math.floor(Math.sqrt(this.queue[0]));
    this.siftDown(0);
  }

  // index = length - 1
  siftUp(index) {
    while (true) {
      let parent = Math.floor((index - 1) / 2);

      if (this.queue[parent] < this.queue[index]) {
        [this.queue[parent], this.queue[index]] = [
          this.queue[index],
          this.queue[parent],
        ];
        index = parent;
      } else break;
    }
  }

  // index = 0
  siftDown(index) {
    while (true) {
      let large = index;
      const left = index * 2 + 1;
      const right = index * 2 + 2;

      if (left < this.queue.length && this.queue[left] > this.queue[large])
        large = left;
      if (right < this.queue.length && this.queue[right] > this.queue[large])
        large = right;

      if (index === large) break;
      [this.queue[index], this.queue[large]] = [
        this.queue[large],
        this.queue[index],
      ];
      index = large;
    }
  }
}

var pickGifts = function (gifts, k) {
  const queue = new LargeQueue(gifts);

  for (let i = 0; i < k; i++) {
    queue.sqrt();
  }

  return queue.queue.reduce((a, b) => a + b);
};

console.log(pickGifts(gifts, k));
