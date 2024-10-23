// valid 대신 순서 출력 결과가 많으면 그중 하나 출력, 유효한 결과가 없으면 []출력

const numCourses = 4,
  prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ];
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

// 인덱스로 선행 과목 판별, 인덱스의 요소로 그다음 배울 과목
var findOrder = function (numCourses, prerequisites) {
  const graphs = Array.from({ length: numCourses }, () => new Array());
  const inDegree = new Array(numCourses).fill(0);

  // [[3,4],[0],[],[]] 과목 3,4를 수강하기위해 0을 선행해야함
  for (const [study, need] of prerequisites) {
    graphs[need].push(study);
    inDegree[study]++; // 선행해야하는 과목이 있는놈들은 +1
  }

  const heap = [];
  const result = [];

  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) heap.push(i); // 선행해야하는 과목이 없는 과목들만 heap에 추가
  }
  console.log(inDegree, graphs);
  while (heap.length > 0) {
    const curr = heap.shift();
    result.push(curr);

    for (const graph of graphs[curr]) {
      inDegree[graph]--;
      if (inDegree[graph] === 0) heap.push(graph);
    }
  }

  return result.length === numCourses ? result : [];
};

console.log(findOrder(numCourses, prerequisites));
