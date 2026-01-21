// pritorities 에서 인덱스가 프로세스, 요소가 우선순위. 우선순위가 클수록 먼저 실행
// [A, B, C, D] === [2, 1, 3, 2]
// [C, D, A, B] => [C]
// [D, A, B] => [C, D]
// [A, B] => [A, B, C, D]
// 해쉬맵을 만들고 우선순위 => 빈도. 이것을 우선순위 오름차 정렬
// 현재 프로세스의 우선순위와 정렬배열의 마지막 요소 비교
// 같을 경우 마지막요소에서 빈도수-- 빈도 0 이면 pop()
// 1. arr = [우선순위, 프로세스][] 만들기
// 2. arr을 정렬시킨 후 map 만들기
// 3. arr을 while문안에서 shift해서 map최대 우선순위와 비교하기
// 40분
function solution(priorities, location) {
  const freq = new Map();

  for (const priority of priorities) {
    freq.set(priority, (freq.get(priority) ?? 0) + 1);
  }

  const queue = priorities.map((e, i) => [e, i]);
  const sortedFreq = [...freq].sort((a, b) => a[0] - b[0]);
  const n = queue.length;

  // [1, 1, 9, 1, 1, 1], 0
  // queue = [[1, 0], [1, 1], [9, 2], [1, 3], [1, 4], [1, 5]]
  // sortedFreq = [[1, 5], [9, 1]]
  while (queue.length > 0) {
    const [priority, process] = queue.shift();
    const [maxPriority, freq] = sortedFreq.at(-1);

    if (priority !== maxPriority) {
      queue.push([priority, process]);
      continue;
    }

    if (location === process) return n - queue.length;

    if (freq - 1 === 0) sortedFreq.pop();
    else sortedFreq[sortedFreq.length - 1] = [maxPriority, freq - 1];
  }

  return -1;
}