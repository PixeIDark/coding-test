// 쿼리[i] 가 items[k][0] 보다 크거나 같으면 아름다움을 꺼낼 수 있음 쿼리[i]를 최대 아름다움으로 교환해서 출력
// 아름다움 없으면 0 출력.

const items = [
    [1, 2],
    [3, 2],
    [2, 4],
    [5, 6],
    [3, 5],
  ],
  queries = [1, 2, 3, 4, 5, 6];
// Output: [2,4,5,5,6,6]
// Explanation:
//     - For queries[0]=1, [1,2] is the only item which has price <= 1. Hence, the answer for this query is 2.
// - For queries[1]=2, the items which can be considered are [1,2] and [2,4].
//     The maximum beauty among them is 4.
// - For queries[2]=3 and queries[3]=4, the items which can be considered are [1,2], [3,2], [2,4], and [3,5].
//     The maximum beauty among them is 5.
// - For queries[4]=5 and queries[5]=6, all items can be considered.
//     Hence, the answer for them is the maximum beauty of all items, i.e., 6.

// 배열로 만든다 를 [k][0]을 index 로 주고, [k][1]을 element 로 준다.
// index 가 겹칠 경우, [k][1]가 큰쪽으로 대체한다.
// items 중 index 에 해당하는 값이 없으면, "empty"로 대체 => empty 는 스킵.
// 객체로 해야함 beauty, price 최대 값이 너무 높음
var maximumBeauty = function (items, queries) {
  const map = new Map();

  // price 는 더 크면서 beauty 는 작을 경우, beauty 값을 그 보다 작은 price 의 beauty 값 으로 맞춰주자.
  for (const [price, beauty] of items) {
    map.set(price, Math.max(beauty, map.get(price) || 0));
  }

  const arr = [...map.keys()].sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    if (map.get(arr[i]) < map.get(arr[i - 1])) {
      map.set(arr[i], map.get(arr[i - 1]));
    }
  }

  const result = [];
  for (const query of queries) {
    let n = query;
    while (!map.has(n) && n > 0) {
      // 이진 탑색으로 개선 가능.
      n--;
    }
    if (n === 0) {
      result.push(n);
      continue;
    }
    result.push(map.get(n));
  }

  // query 와 같은거 찾고 없으면 key.max < query

  return result;
};

console.log(maximumBeauty(items, queries));
