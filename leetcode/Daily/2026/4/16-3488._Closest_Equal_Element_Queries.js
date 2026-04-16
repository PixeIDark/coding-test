// num => [...index].sort()
// 이진탐색으로 queries 선택된 밸류인덱스를 탐색, 없으면 -1
// 탐색 후 왼쪽 오른쪽 중 가까운 값과 |x - y|계산 후 푸시
// 원형이라네?
// 35분
var solveQueries = function (nums, queries) {
  const n = nums.length;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (!map.has(num)) map.set(num, []);
    map.get(num).push(i);
  }

  const circularDist = (a, b) => Math.min(Math.abs(a - b), n - Math.abs(a - b));
  const result = [];

  for (const query of queries) {
    const num = nums[query];
    const indexes = map.get(num);

    if (indexes.length === 1) {
      result.push(-1);
      continue;
    }

    let left = 0;
    let right = indexes.length - 1;
    let location = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (indexes[mid] === query) {
        location = mid;
        break;
      } else if (indexes[mid] > query) right = mid - 1;
      else left = mid + 1;
    }

    const leftNeighbor = indexes[(location - 1 + indexes.length) % indexes.length];
    const rightNeighbor = indexes[(location + 1) % indexes.length];
    const distLeft = circularDist(query, leftNeighbor);
    const distRight = circularDist(query, rightNeighbor);

    result.push(Math.min(distLeft, distRight));
  }

  return result;
};