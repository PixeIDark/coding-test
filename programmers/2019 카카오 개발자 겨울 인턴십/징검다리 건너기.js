//

const t = 1,
  stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1],
  k = 3;
// OutPut: 3

// 0인 돌이 없으면 모두 1씩 감소
// 0인돌 있어도 걍 1씩 감소 시켜라
// k=3 기준으로 0인돌이 3개 연속으로 이어지면 못건넘 k <= zeroStones 충족시 못건넘
// 위의 상태가 될때까지 감소 시키면됨. => 몇을 감소 시키면 저 조건이 바로 충족될지임.
function solution(stones, k) {
  // 크키가 k인 슬라이딩 윈도우로 탐색
  // 모든 구간을 탐색하고 윈도우의 요소가 모두 0이하가 되는 최소 값이 정답임
  // 윈도우내 최대 값이 곧 최소 값임.

  let min = Infinity;
  let start = 0;
  let end = start + k - 1;
  // 최대 값의 인덱스를 기억하고 벗어나면 최대 값을 다시 찾아야함.

  let max = 0;
  let maxIndex = -1;
  const findMax = (start, end) => {
    max = 0;
    for (let i = start; i <= end; i++) {
      if (stones[i] > max) {
        max = stones[i];
        maxIndex = i;
      }
    }
    min = Math.min(min, max);
    return maxIndex;
  };
  // 두번 째로 큰수로 교체 해야줘야해 인덱스 범위를 벗아나면
  while (end < stones.length) {
    if (maxIndex < start) {
      findMax(start, end);
    }
    start++;
    end++;
  }
  return min;
}

/*
class Deque {
    constructor() {
        this.items = [];
        this.frontIndex = 0;  // 앞쪽에서 삭제될 항목 수를 추적
        this.backIndex = 0;   // 실제 아이템이 들어갈 위치
    }

    push(item) {
        // 새로운 값보다 작거나 같은 값들의 위치를 찾아 한 번에 제거
        while (this.backIndex > this.frontIndex &&
        this.items[this.backIndex - 1][0] <= item[0]) {
            this.backIndex--;
        }
        this.items[this.backIndex] = item;
        this.backIndex++;
    }

    pop(index) {
        // 제거할 인덱스가 현재 덱의 front에 있는 값의 인덱스와 같으면
        // frontIndex만 증가시켜 논리적으로 제거
        if (this.frontIndex < this.backIndex &&
            this.items[this.frontIndex][1] === index) {
            this.frontIndex++;
        }
    }

    getMax() {
        // 유효한 첫 번째 값(최댓값) 반환
        return this.frontIndex < this.backIndex ?
            this.items[this.frontIndex][0] : 0;
    }

    clear() {
        // 필요한 경우 덱 초기화
        this.frontIndex = 0;
        this.backIndex = 0;
    }
}

function solution(stones, k) {
    const deque = new Deque();
    let min = Infinity;

    // 초기 k개의 값을 덱에 추가
    for (let i = 0; i < k; i++) {
        deque.push([stones[i], i]);
    }

    // 첫 윈도우의 최댓값 확인
    min = Math.min(min, deque.getMax());

    // 나머지 윈도우 순회
    for (let i = k; i < stones.length; i++) {
        deque.pop(i - k);
        deque.push([stones[i], i]);
        min = Math.min(min, deque.getMax());
    }

    return min;
}

console.log(solution(stones, k));
