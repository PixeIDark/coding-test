// k과 되는 최소 배열 길이

const nums = [2, -1, 2],
  k = 3;
// Output: 3

// set - heap 에 넣고 무한 반복.
function shortestSubarray(nums, k) {
  const n = nums.length;
  let minLength = n + 1;
  const deque = [];

  // 누적합 배열 생성 (nums 배열 변경 방지)
  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  // 모노톤 큐를 이용한 최소 길이 찾기
  for (let i = 0; i <= n; i++) {
    // k 이상인 구간 찾기
    while (deque.length && prefixSum[i] - prefixSum[deque[0]] >= k) {
      minLength = Math.min(minLength, i - deque.shift());
    }

    // 현재 합보다 큰 이전 인덱스 제거
    while (deque.length && prefixSum[i] <= prefixSum[deque[deque.length - 1]]) {
      deque.pop();
    }

    deque.push(i);
  }

  return minLength <= n ? minLength : -1;
}

console.log(shortestSubarray(nums, k));
