// 조건 맞는지 틀린지 판별해보자

const numCourses = 5,
  prerequisites = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ],
  queries = [
    [0, 4],
    [4, 0],
    [1, 3],
    [3, 0],
  ];
// Output: [true,true]

// 필수조건 배열에 넣으셈.
// 0 = [1,2,3,4]
// 1 = [2,3,4]
// 2 = [3,4]
// 3 = [4]
// 4 = []
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const dp = Array.from({ length: numCourses }, () => []);

  // b 를 찾아서 배열에 넣고, pre의 a 가 b이면 걔의 b를 또 배열에 넣어서 탐색
  prerequisites.forEach(([a, b]) => dp[a].push(b));

  for (let i = 0; i < dp.length; i++) {
    const queue = [...dp[i]];
    const vis = new Set();

    while (queue.length) {
      const start = queue.shift();
      if (vis.has(start)) continue;
      vis.add(start);
      for (const end of dp[start]) {
        if (vis.has(end)) continue;
        dp[i].push(end);
        queue.push(end);
      }
    }

    dp[i] = new Set(dp[i]);
  }

  // 쿼리 첫번째 요소를 dp 인덱스에 넣어서 두번째 요소가 존재하는지 탐색 있으면 true 임
  // const result = queries.map(([a, b]) => dp[a].has(b));

  return queries.map(([a, b]) => dp[a].has(b));
};

console.log(checkIfPrerequisite(numCourses, prerequisites, queries));
